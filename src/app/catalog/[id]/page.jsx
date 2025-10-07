"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import styles from "./[id].module.css";
import Image from "next/image";
import Link from "next/link";
import { LeftOutlined, CloseOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from 'react-toastify';

export default function BookDetails() {
    const params = useParams();
    const [id, setId] = useState(null);
    const [book, setBook] = useState(null);
    const [author, setAuthor] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!params?.id) return;
        setId(params.id);
    }, [params?.id]);

    useEffect(() => {
        if (!id) return;

        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/books/${id}`);
                setBook(response.data);
            } catch (error) {
                setBook(null);
            } finally {
                setLoading(false);
            }
        };
        fetchBook();
    }, [id]);

    useEffect(() => {
        if (!book || !book.author_name) return;

        const fetchAuthor = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/authors/${book.author_id}`);
                setAuthor(Array.isArray(response.data) ? response.data[0] : response.data);
            } catch (error) {
                setAuthor(null);
            }
        };
        fetchAuthor();
    }, [book]);

    const handleBuy = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmPurchase = () => {
        toast.success("Purchase confirmed! Thank you for buying.");
        setShowModal(false);
    };

    if (!book) {
        return <p>Loading or not found.</p>;
    }

    return (
        <div className={styles.page}>
            <ToastContainer position="top-right" autoClose={4000} />
            <div className={styles.bookDetailsContainer}>
                <Link href="/catalog" className={styles.iconBackButton} aria-label="Back to products">
                    <LeftOutlined style={{ fontSize: "22px" }} />
                </Link>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.cover}
                        src={book.cover_url || "/img/placeholder.jpg"}
                        alt={book.title}
                        width={240}
                        height={340}
                        loading="lazy"
                        style={{ objectFit: "cover", borderRadius: "20px" }}
                    />
                    <button
                        className={styles.buyButton}
                        onClick={handleBuy}
                    >
                        Buy
                    </button>
                </div>
                <div className={styles.infoBlock}>
                    <h1 className={styles.title}>{book.title}</h1>
                    <div className={styles.details}>
                        <p><strong>Summary:</strong> {book.summary}</p>
                        <p><strong>Author:</strong> {book.author_name}</p>
                        <p><strong>Genre:</strong> {book.genre}</p>
                        <p><strong>Pages:</strong> {book.pages}</p>
                        <p><strong>Language:</strong> {book.language}</p>
                        <p><strong>Publication date:</strong> {book.publication_date?.split('T')[0]}</p>
                        <p><strong>Price:</strong> R$ {book.price}</p>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeModal} onClick={handleCloseModal}><CloseOutlined style={{ fontSize: "22px" }}/></button>
                        <h2 className={styles.modalTitle}>Checkout</h2>
                        <div className={styles.modalBookInfo}>
                            <Image
                                src={book.cover_url || "/placeholder.jpg"}
                                alt={book.title}
                                width={120}
                                height={180}
                                className={styles.modalCover}
                            />
                            <div className={styles.modalDetails}>
                                <p><strong>Title:</strong> {book.title}</p>
                                <p><strong>Author:</strong> {book.author_name}</p>
                                <p><strong>Price:</strong> R$ {book.price}</p>
                            </div>
                        </div>
                        <button className={styles.confirmButton} onClick={handleConfirmPurchase}>
                            Confirm Purchase
                        </button>
                    </div>
                </div>
            )}

            {author && (
                <div className={styles.authorContainer}>
                    <Image
                        className={styles.authorPhoto}
                        src={author.photo_url || "/placeholder-author.jpg"}
                        alt={author.name}
                        width={200}
                        height={200}
                        loading="lazy"
                        style={{ objectFit: "cover", borderRadius: "24px" }}
                    />
                    <div className={styles.authorInfoBlock}>
                        <div className={styles.authorName}>{author.name}</div>
                        <div className={styles.authorDetails}>
                            <p><strong>Bio:</strong> {author.bio}</p>
                            <p><strong>Birth Date:</strong> {author.birth_date?.split('T')[0]}</p>
                            <p><strong>Country:</strong> {author.country}</p>
                            <p><strong>Language:</strong> {author.language}</p>
                            <p><strong>Genres:</strong> {author.literary_genres}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}