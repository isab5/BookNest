import styles from "./contact.module.css";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <div className={styles.page}>
            <div className={styles.infoCard}>
                <h2>Contato</h2>
                <p>
                    Se você tiver alguma dúvida, sugestão ou quiser entrar em contato comigo, preencha o formulário abaixo ou envie um e-mail para: 
                </p>
                <p>
                    <a href="mailto:contato@meusite.com">contato@meusite.com</a>
                </p>

                <form className={styles.form}>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Mensagem:</label>
                    <textarea id="message" name="message" rows="5" required />

                    <button type="submit">Enviar</button>
                </form>

                <div className={styles.socialSection}>
                    <p>
                        Você também pode entrar em contato comigo através das minhas redes sociais:
                    </p>
                    <div className={styles.socialIcons}>
                        <a href="https://instagram.com/seuusuario" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:contato@meusite.com" aria-label="E-mail">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <p>Obrigada por visitar o BookNest!</p>
            </div>
        </div>
    );
}