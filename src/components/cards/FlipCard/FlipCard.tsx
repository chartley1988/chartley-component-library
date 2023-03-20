import style from '@/components/cards/FlipCard/FlipCard.module.css';
import { useState } from 'react';
import { ReactNode } from 'react';

type AppProps = {
	frontFace: ReactNode;
	backFace: ReactNode;
};

export default function FlipCard({ frontFace, backFace }: AppProps) {
	const [flipped, setFlipped] = useState(false);

	function clickHandler() {
		flipped ? setFlipped(false) : setFlipped(true);
	}

	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				{/* Card Back */}
				<div
					className={
						flipped
							? `${style.back}`
							: `${style.back} ${style.flipped}`
					}
					onClick={clickHandler}
				>
					{backFace}
				</div>

				{/* Card Front */}
				<div
					className={
						flipped
							? `${style.front} ${style.flipped}`
							: `${style.front}`
					}
					onClick={clickHandler}
				>
					{frontFace}
				</div>
			</div>
		</div>
	);
}
