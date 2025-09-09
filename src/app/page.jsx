"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./page.module.css";
import BookCard from "../components/BookCard/BookCard";

export default function Home() {
   const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);

     useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/books');
                setBooks(response.data);
            } catch (error) {
                console.log("Failed to fetch books");
            }
        };
        fetchBooks();
    }, []);

  return (
    <div className={styles.page}>
      <h1 className="font-inter-bold">Welcome to BookNest</h1>
                  <div className={styles.bookList}>
                {books.map(book => (
                    <BookCard key={book.id} book={book} onClick={() => console.log(book.id)} />
                ))}
            </div>

    </div>
  );
}
