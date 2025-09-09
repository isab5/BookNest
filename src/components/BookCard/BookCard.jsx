import styles from "./BookCard.module.css";
import Image from "next/image";

export default function BookCard({book, onClick }) {
    console.log("Teste", book.cover_url);
    
    return (
        <div className={styles.card} onClick={onClick}>
            <Image src={book.cover_url || "/placeholder.jpg"} 
            className={styles.url} alt={book.title} width={150} height={200} />
            <h3 className={styles.title}>{book.title}</h3>
            <p>{book.summary}</p>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.pages}</p>
        </div>
    );
}