import styles from "./aboutme.module.css"
import Image from "next/image";import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutMe() {
    return (
        <div className={styles.page}>
            <div className={styles.infoCard}>
                <Image src="/img/Isabella.jpg" alt="Isabella Dev" width={200} height={200} className={styles.img} />
                <h2>Olá, seja bem-vindo(a) ao BookNest!</h2>
                <p>Meu nome é Isabella, tenho 17 anos e sou apaixonada por livros, tecnologia e paisagens. Desde pequena, os livros fazem parte da minha vida, trazendo conhecimento, inspiração e novas perspectivas. Essa paixão, aliada ao meu interesse por desenvolvimento web, me motivou a criar o BookNest — uma simulação de livraria online pensada para quem valoriza o universo literário e a experiência digital.</p>
                <p>Atualmente, estou concluindo o curso de Técnico em Desenvolvimento de Sistemas no SENAI Valinhos, onde venho aprimorando meus conhecimentos em programação, design e desenvolvimento de soluções criativas. O BookNest nasceu como projeto para unir minha trajetória acadêmica à vontade de criar experiências digitais funcionais, bonitas e intuitivas.</p>
                <p>Aqui no BookNest, meu objetivo é oferecer uma navegação agradável, fácil e envolvente, apresentando títulos, autores e gêneros literários diversos. Tudo foi desenvolvido com atenção aos detalhes e foco no usuário, simulando o ambiente de uma livraria moderna e acessível.</p>
                <p>Este site é resultado de muita dedicação, aprendizado e carinho. Espero que você aproveite a visita, descubra novos livros e se inspire a explorar ainda mais o universo da leitura!</p>
                <p>Obrigada por estar aqui.</p>

                 <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Me acompanhe nas redes sociais:</h4>
                <div className={styles.socials}>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram"><FaInstagram /></a>
                    <a href="https://github.com/isab5" target="_blank" rel="noopener" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/isabella-borin-792b222b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
            </div>
            </div>
        </div>
    )
}