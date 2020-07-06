import React from "react";
import { css } from "emotion";

const FaqItem = ({ content, active, index }) => {
	let rotate = "0";
	let display = "none";
	active ? ((rotate = "180"), (display = "block")) : rotate, display;

	return (
		<div
			className={css`
				width: 90%;
				margin: 1em auto 0;
				font-family: "Raleway";
			`}
		>
			<div
				className={css`
					display: flex;
					padding: 0.7em;
					justify-content: space-between;
					// background-color: #ecf0f1;
					border: 1px solid #082c50;
					border-radius: 4px;
					p {
						width: 90%;
						font-weight: 600;
					}

					i {
						padding: 0.3em;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				`}
			>
				<p data-id={index}>{content.question}</p>
				<i
					data-id={index}
					className={`fa fa-caret-down ${css`
						transform: rotate(-${rotate}deg);
						transition: all 0.4s ease;
					`} `}
					aria-hidden="true"
				></i>
			</div>
			<div
				className={css`
					transition: ${active ? "all 0.4s ease" : ""};
					opacity: ${active ? "1" : "0"};
					position: ${active ? "static" : "absolute"};
					padding: 0.5em;
					border-radius: 0 0 4px 4px;
					border: 1px solid #ecf0f1;
					border-top: none;

					p {
						width: 90%;
						margin-left: 1em;
						font-size: 0.9rem;
					}
				`}
			>
				<p>{content.answer}</p>
			</div>
		</div>
	);
};

export default FaqItem;
