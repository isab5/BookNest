"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "./catalog.module.css";
import BookCard from "../../components/BookCard/BookCard";
import Image from "next/image";

export default function Catalog() {
    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/books");
                setBooks(response.data);
            } catch (error) {
                console.log("Failed to fetch books");
            }
        };
        fetchBooks();
    }, []);

    const handleBuy = (book) => {
        setSelectedBook(book);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBook(null);
    };

    const handleConfirmPurchase = () => {
        alert("Purchase confirmed! Thank you for buying.");
        setShowModal(false);
        setSelectedBook(null);
    };

    return (
        <div className={styles.page}>
            <h1 className={styles.titlePage}>Book catalog</h1>
            <div className={styles.bookList}>
                {books.map((book) => (
                    <div key={book.id} className={styles.bookCardWrapper}>
                        <Link href={`/catalog/${book.id}`} style={{ textDecoration: "none" }}>
                            <BookCard book={book}>
                                <button
                                    className={styles.buyButton}
                                    type="button"
                                    onClick={e => {
                                        e.preventDefault();
                                        handleBuy(book);
                                    }}
                                >
                                    Buy
                                </button>
                            </BookCard>
                        </Link>
                    </div>
                ))}
            </div>

            {showModal && selectedBook && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeModal} onClick={handleCloseModal}>×</button>
                        <h2>Checkout</h2>
                        <div className={styles.modalBookInfo}>
                            <Image
                                src={selectedBook.cover_url || "/placeholder.jpg"}
                                alt={selectedBook.title}
                                width={120}
                                height={180}
                                className={styles.modalCover}
                            />
                            <div className={styles.modalDetails}>
                                <p><strong>Title:</strong> {selectedBook.title}</p>
                                <p><strong>Author:</strong> {selectedBook.author_name}</p>
                                <p><strong>Price:</strong> R$ {selectedBook.price}</p>
                            </div>
                        </div>
                        <button className={styles.confirmButton} onClick={handleConfirmPurchase}>
                            Confirm Purchase
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}