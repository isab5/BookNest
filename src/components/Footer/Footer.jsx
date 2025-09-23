import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.section}>
                <div className={styles.logoArea}>
                    <Image
                        src="/img/logoBooknest.png"
                        alt="BookNest Logo"
                        width={150}
                        height={200}
                        loading="lazy"
                    />
                </div>
                <p className={styles.slogan}>Your cozy place for books</p>
            </div>
            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Explore</h4>
                <ul>
                    <li><Link href="/" className={styles.link}>Home</Link></li>
                    <li><Link href="/catalog" className={styles.link}>Catalog</Link></li>
                    <li><Link href="/about" className={styles.link}>About Me</Link></li>
                    <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                </ul>
            </div>
            <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Follow Me</h4>
                <div className={styles.socials}>
                    <a href="https://www.instagram.com/isaj333j6?igsh=MWMxd2Q5OGdvOGJiNg==" target="_blank" rel="noopener" aria-label="Instagram"><FaInstagram /></a>
                    <a href="https://github.com/isab5" target="_blank" rel="noopener" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/isabella-borin-792b222b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
            </div>
        </footer>
    );
}