import Link from "next/link";

type AppProps = {
    text: string;
    destination: string;
} 

export default function MenuLink({text, destination}: AppProps) {
	return (
		<li>
			<Link href={destination}>{text}</Link>
		</li>
	);
}
