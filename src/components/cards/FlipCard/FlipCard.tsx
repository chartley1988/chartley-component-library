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
	axis: 'X' | 'Y';
};

export default function FlipCard({
	frontFace,
	backFace,
	width,
	height,
	speed,
	zValue,
	cornerRadius,
	axis,
}: AppProps) {
	const [flipped, setFlipped] = useState(false);

	function clickHandler() {
		flipped ? setFlipped(false) : setFlipped(true);
	}

	return (
		<div
			style={{
				position: 'relative',
				width: width,
				height: height,
				zIndex: zValue,
			}}
		>
			{/* Card Front */}
			<div
				className={style.front}
				onClick={clickHandler}
                style={ 
					flipped
						? {
                                
								transform: `perspective(1000px) rotate${axis}(180deg)`,
								transition: `transform ${speed} ease`,
								borderRadius: cornerRadius,
						  }
						: {
								transform: `perspective(1000px) rotate${axis}(0deg)`,
								transition: `transform ${speed} ease`,
								borderRadius: cornerRadius,
						  }
				}
			>
				<div
					style={{
						boxSizing: 'border-box',
						width: '100%',
						height: '100%',
					}}
				>
					{frontFace}
				</div>
			</div>

			{/* Card Back */}
			<div
				className={style.back}
				onClick={clickHandler}
				style={
					flipped
						? {
								transform: `perspective(1000px) rotate${axis}(0)`,
								transition: `transform ${speed} ease`,
								borderRadius: cornerRadius,
						  }
						: {
								transform: `perspective(1000px) rotate${axis}(-180deg)`,
								transition: `transform ${speed} ease`,
								borderRadius: cornerRadius,
						  }
				}
			>
				<div
					style={{
						boxSizing: 'border-box',
						width: '100%',
						height: '100%',
					}}
				>
					{backFace}
				</div>
			</div>
		</div>
	);
}

FlipCard.defaultProps = {
	speed: '0.4s',
	zValue: 1,
	cornerRadius: '0',
	axis: 'Y',
};
