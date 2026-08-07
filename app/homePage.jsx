import styles from "./page.module.css";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./img/banner.png";


export default function HomePage(){

    return(

        <div className={styles.container}>

            <section className={styles.hero}>

                <h1>Bem-vindo ao meu Site</h1>

                <p>
                    Projeto desenvolvido pelo 3B
                </p>

                <button className={styles.botao}>
                    Saiba Mais
                </button>

            </section>

            <section className={styles.cards}>

                <div className={styles.card}>
                    <h2>HTML</h2>
                    <p>
                        Estrutura do site.
                    </p>
                </div>

                <div className={styles.card}>
                    <h2>CSS</h2>
                    <p>
                        Responsável pelo design.
                    </p>
                </div>

                <div className={styles.card}>
                    <h2>JavaScript</h2>
                    <p>
                        Responsável pela interatividade.
                    </p>
                </div>

            </section>

            <footer className={styles.footer}>
                © 2026 - Meu Site
            </footer>

        </div>

    )

}