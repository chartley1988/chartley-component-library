import style from '@/components/cards/FlipCard/FlipCard.module.css';
import { useRef, useState } from 'react';

export default function FlipCard() {
	const [flipped, setFlipped] = useState(false);
	const front = useRef(null);
	const back = useRef(null);

	function clickHandler() {
		if (flipped) {
			setFlipped(false);
		} else {
			setFlipped(true);
		}
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
					ref={back}
					onClick={clickHandler}
				></div>

                {/* Card Front */}
				<div
					className={
						flipped
							? `${style.front} ${style.flipped}`
							: `${style.front}`
					}
					ref={front}
					onClick={clickHandler}
				></div>
			</div>
		</div>
	);
}
