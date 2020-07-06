import React, { useState } from "react";
import { css } from "emotion";
import FaqItem from "./FaqItem";

const FaqData = {
	0: {
		question: "What is Maestro 2020?",
		answer:
			"MAESTRO 2020 is a Business Challenge Competition, organised for the 3rd consecutive year by Rotaract Club of the University of Moratuwa.",
	},

	1: {
		question: "What is Maestro 2020?",
		answer:
			"MAESTRO 2020 is a Business Challenge Competition, organised for the 3rd consecutive year by Rotaract Club of the University of Moratuwa.",
	},
	2: {
		question: "What is Maestro 2020?",
		answer:
			"MAESTRO 2020 is a Business Challenge Competition, organised for the 3rd consecutive year by Rotaract Club of the University of Moratuwa.",
	},
};

const FaqDataLen = Object.keys(FaqData).length;

const Faqs = () => {
	const [active, setActive] = useState(Array(FaqDataLen).fill(false));
	const handleClick = (e) => {
		if (e.target.hasAttribute("data-id")) {
			const clickIndex = e.target.getAttribute("data-id");
			setActive(
				active.map((value, i) => {
					if (i == clickIndex) {
						console.log(value);
						value = !value;
					} else {
						value = false;
					}
					return value;
				})
			);

			console.log(active);
		}
	};

	return (
		<div className={css``}>
			<h3
				className={css`
					text-align: center;
					width: 70%;
					margin: 1em auto;
					letter-spacing: normal;
					font-weight: 700;
					font-size: 2rem;
					text-transform: uppercase;
				`}
			>
				Frequently Asked Questions
			</h3>
			{Object.keys(FaqData).map((index) => (
				<div key={index} onClick={(event) => handleClick(event)}>
					<FaqItem
						content={FaqData[index]}
						active={active[index]}
						index={index}
					/>
				</div>
			))}
		</div>
	);
};

export default Faqs;
