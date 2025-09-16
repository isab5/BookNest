"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "./catalog.module.css";
import BookCard from "../../components/BookCard/BookCard";

export default function Catalog() {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);

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

    return (
        <div className={styles.page}>
            <h1 className={styles.titlePage}>Book catalog</h1>
            <div className={styles.bookList}>
                {books.map((book) => (
                    <Link key={book.id} href={`/catalog/${book.id}`} style={{ textDecoration: "none" }}>
                        <BookCard book={book} />
                    </Link>
                ))}
            </div>
        </div>
    );
}