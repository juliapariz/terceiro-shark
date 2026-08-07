import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./fotos/foto.jpg";

export default function HomePage() {
return (
        <>
            <Header />
            <main>
                <section>
                    <Image src={Banner} alt="Banner" />
                </section>
                <p>Free Fire</p>
            </main>
            <Footer />
        </>
    )
}