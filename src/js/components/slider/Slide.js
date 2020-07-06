import React from "react";
import { css } from "emotion";

const Slide = (props) => {
	return (
		<div
			className={css`
				width: ${(100 / props.items) * 0.9}%;
				display: flex;
				flex-direction: column;
				align-items: center;

				p {
					font-size: 0.8rem;
				}
			`}
		>
			<blockquote
				className={css`
					font-family: "Raleway";
					font-style: italic;
				`}
			>
				{props.content.quote}
			</blockquote>
			<p
				className={css`
					margin-top: 1em;
					font-weight: 600;
				`}
			>
				{props.content.name}
			</p>
			<p
				className={css`
					font-weight: 600;
					font-style: italic;
				`}
			>
				{props.content.team}
			</p>
			<p
				className={css`
					font-weight: 600;
				`}
			>
				{props.content.uni}
			</p>
			<p>{props.content.place}</p>
		</div>
	);
};

export default Slide;
