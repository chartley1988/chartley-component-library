// Menu slides from parent element.

import { useState } from "react";

type AppProps = {
	menuItems: {
		display: string;
		url: string;
	}[];
};

export default function SlideMenu({ menuItems }: AppProps) {
	const [ open, setOpen ] = useState(false);
    
    return (
		<div>
			<button>Drop Menu</button>

			<nav>
				<ul>
					{menuItems.map((item) => {
						return <li key={item.display}>{item.display}</li>;
					})}
				</ul>
			</nav>
		</div>
	);
}
