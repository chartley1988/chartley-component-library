import Link from "next/link";
import style from '@/styles/layout.module.css'

type AppProps = {
    text: string;
    destination: string;
} 

export default function MenuLink({text, destination}: AppProps) {
	return (
		<li className={style.layout}>
			<Link href={destination}>{text}</Link>
		</li>
	);
}
