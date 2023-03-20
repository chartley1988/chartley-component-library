import style from '@/components/cards/FlipCard/FlipCard.module.css';
import { useState } from 'react';
import { ReactNode } from 'react';

type AppProps = {
	frontFace: ReactNode;
	backFace: ReactNode;
	width: string;
	height: string;
	speed: string;
	zValue: number;
	cornerRadius: string;
};

export default function FlipCard({
	frontFace,
	backFace,
	width,
	height,
	speed,
	zValue,
	cornerRadius,
}: AppProps) {
	const [flipped, setFlipped] = useState(false);

	function clickHandler() {
		flipped ? setFlipped(false) : setFlipped(true);
	}

	return (
		<div
			className={style.wrapper}
			style={{ width: width, height: height, zIndex: zValue }}
		>
			{/* Card Back */}
			<div
				className={
					flipped ? `${style.back}` : `${style.back} ${style.flipped}`
				}
				onClick={clickHandler}
				style={{
					transition: `transform ${speed} ease`,
					borderRadius: cornerRadius,
				}}
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
				style={{
					transition: `transform ${speed} ease`,
					borderRadius: cornerRadius,
				}}
			>
				{frontFace}
			</div>
		</div>
	);
}

FlipCard.defaultProps = {
	speed: '0.4s',
	zValue: 1,
	cornerRadius: '0',
};
