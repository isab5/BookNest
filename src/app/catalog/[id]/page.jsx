"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import styles from "./[id].module.css"

export default function BookDetails() {
    const params = useParams();
    const [id, setId] = useState(null);
    const [book, setBook] = useState(null);

    useEffect(() => {
        if (!params?.id) return;
        setId(params.id);
    }, [params?.id]);

    useEffect(() => {
        if (!id) return;

        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/books/${id}`);
                setBook(response.data);
            } catch (error) {
                setBook(null);
            }
        };
        fetchBook();
    }, [id]);

    if (!book) {
        return <p>Loading or not found.</p>;
    }

    return (
    <div className={styles.page}>
        <div className={styles.bookDetailsContainer}>
            <img
                className={styles.cover}
                src={book.cover_url || "/placeholder.jpg"}
                alt={book.title}
            />
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
    </div>
);
}