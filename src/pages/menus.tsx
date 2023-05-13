import Head from 'next/head';
import Header from '@/page_components/PageHeader';
import style from '@/styles/layout.module.css';
import SlideMenu from '@/components/menus/SlideMenu/SlideMenu';

const menuItems = [
    {display: 'Home', url: '/'},
    {display: 'Services', url: '/'},
    {display: 'About Us', url: '/'},
]

export default function Menus() {
	return (
		<>
			<Head>
				<title>Chartley&apos;s Custom Components - Menus</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={style.wrapper}>
				<div className={style.container}>
					<Header />
					<section>
						<h2>Menus</h2>
						<SlideMenu menuItems={menuItems}/>
					</section>
				</div>
			</main>
		</>
	);
}