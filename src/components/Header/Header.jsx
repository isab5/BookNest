import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/img/logoBooknest.png" alt="Logo" width={150} height={200} />
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/catalog">
                                <span>Catalog</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/aboutme">
                                <span>About Me</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}