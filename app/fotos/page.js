import styles from "./page.module.css";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Image
          src="/banner.png"
          alt="Banner do Terceirão"
          width={1536}
          height={1024}
        />
      </main>

      <Footer />
    </>
  );
}