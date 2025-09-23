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
                    <a href="mailto:contato@meusite.com">isabella.b.rosa6@aluno.senai.br</a>
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
                        <a href="https://www.instagram.com/isaj333j6?igsh=MWMxd2Q5OGdvOGJiNg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://github.com/isab5" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/isabella-borin-792b222b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:isabella.b.rosa6@aluno.senai.br" aria-label="E-mail">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <p>Obrigada por visitar o BookNest!</p>
            </div>
        </div>
    );
}