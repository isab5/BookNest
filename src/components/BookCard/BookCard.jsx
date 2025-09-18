import Image from "next/image";
import styles from "./BookCard.module.css";

export default function BookCard({ book, children, onClick }) {
    // Fallbacks for missing book data
    const displayedTitle = book.title || "Título não informado";
    const displayedSummary = book.summary || "Resumo não informado";
    const displayedAuthor = book.author_name || "Autor não informado";
    const displayedGenre = book.genre || "Gênero não inform ado";
    const displayedPages = book.pages ? `${book.pages} páginas` : "Páginas não informadas";
    const displayedPrice = book.price ? `R$ ${book.price}` : "Preço não informado";
    const displayedCover = book.cover_url || "/placeholder.jpg";

    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.imageCard}>
                <Image
                    src={displayedCover}
                    alt={displayedTitle}
                    width={150}
                    height={200}
                    loading="lazy"
                    className={styles.image}
                />
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{displayedTitle}</h3>
                <p className={styles.summary}>{displayedSummary}</p>
                <p className={styles.author}>{displayedAuthor}</p>
                <p className={styles.genre}>{displayedGenre}</p>
                <p className={styles.pages}>{displayedPages}</p>
                <p className={styles.price}>{displayedPrice}</p>
                {children}
            </div>
        </div>
    );
}