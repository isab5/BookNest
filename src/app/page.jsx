"use client";
import { Carousel } from "antd";
import styles from "./page.module.css";

const carouselImages = [
  {
    url: "/img/books.jpg",
    alt: "Explore diverse books",
    caption: "Explore a universe of books from every genre.",
  },
  {
    url: "/img/AliHazelwood.jpg",
    alt: "Discover new authors",
    caption: "Discover new authors and timeless classics.",
  },
  {
    url: "/img/Reading.jpg",
    alt: "Read anywhere",
    caption: "Read anywhere, anytime, with BookNest.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.carouselContainer}>
        <Carousel autoplay className={styles.carousel}>
          {carouselImages.map((img, idx) => (
            <div key={idx} className={styles.carouselSlide}>
              <img src={img.url} alt={img.alt} className={styles.carouselImage} />
              <div className={styles.carouselCaption}>{img.caption}</div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.infoCard}>
        <h2>What is BookNest?</h2>
        <p>
          <b>BookNest</b> is your digital home for discovering, exploring, and purchasing books across all genres and for all readers. 
          Whether you love fiction, non-fiction, poetry, or academic works, BookNest welcomes everyone who is passionate about reading.
        </p>
        <h3>Our Mission</h3>
        <p>
          To connect readers and authors, making literature accessible, diverse, and enjoyable for everyone.
        </p>
        <h3>Our Value</h3>
        <p>
          We believe in the transformative power of books. BookNest is dedicated to creating a welcoming environment, fostering curiosity, and promoting lifelong learning through the joy of reading.
        </p>
      </div>
    </div>
  );
}