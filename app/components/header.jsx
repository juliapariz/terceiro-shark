import Link from "next/link";

export default function Header() {
return(
<header>
    <h1><Link href="/">Terceiro Shark</Link></h1>
    <nav>
        <ul>
            <li><Link href="/home">home</Link></li>
            <li><Link href="/sobre">sobre</Link></li>
            <li><Link href="/fotos">wide_dramatic_graphic_poster_hero_image_underwate.png</Link></li>
        </ul>
    </nav>
</header>

)
}