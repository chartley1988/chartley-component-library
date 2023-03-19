import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Spectral } from 'next/font/google';

const spectral = Spectral({
	weight: ['400', '500', '600', '700', '800'],
	subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={spectral.className}>
			<Component {...pageProps} />
		</main>
	);
}
