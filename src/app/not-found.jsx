import Link from "next/link";
import Image from "next/image";
import styles from "./notFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Image src="/img/notFound.gif" alt="Not Found" width={200} height={200}  />
                <h1> Página não encontrada! 😥</h1>
                <p>A página que você procura não existe ou está indisponível por tempo indeterminado.</p>
                <div>
                    <Link href="/">
                        <button className={styles.button}>
                            🏠 Voltar para Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}