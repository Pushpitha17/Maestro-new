import React, { useState } from "react";
import { css } from "emotion";
import Slide from "./Slide";

const SliderContent = () => {
	const quotes = {
		0: {
			name: "Sachindi Fernando",
			team: "Team Divergent",
			uni: "University of Colombo",
			place: "Champions ",
			quote:
				'"The case studies were upto a very high standard and thanks to those cases, we were able to obtain an indepth knowledge about how certain industries operate, about marketing strategies, tactics and so on."',
		},
		1: {
			name: "Shanora Wijetunga",
			team: "Team Weborama ",
			uni: "American National College",
			place: "Best Pitcher / 1st Runners up ",
			quote:
				'"From my experience, I would like to say that Maestro was a great opportunity to tackle real life business problems, in a perfectly simulated corporate environment."',
		},
	};

	const numberOfItems = Object.keys(quotes).length;
	const [active, setActive] = useState(0);

	const nextHandle = () => {
		if (active < numberOfItems - 1) {
			setActive(active + 1);
		}
	};
	const prevHandle = () => {
		if (active > 0) {
			setActive(active - 1);
		}
	};

	const handleDotClick = (event) => {
		setActive(event.target.getAttribute("data-quote"));
	};
	return (
		<div>
			<div
				className={css`
					position: relative;
				`}
			>
				<i
					className={`fa fa-chevron-left ${css`
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						left: 1em;
						@media (min-width: 600px) {
							left: 8%;
						}
					`}`}
					aria-hidden="false"
					onClick={prevHandle}
				></i>
				<div
					className={css`
						width: 80%;
						margin: 0 auto;
						overflow: hidden;
					`}
				>
					<div
						className={css`
							display: flex;
							width: ${numberOfItems * 100}%;
							justify-content: space-around;
							transform: translateX(-${(active * 100) / numberOfItems}%);
							transition: transform 0.5s ease;
						`}
					>
						{Object.keys(quotes).map((index) => (
							<Slide
								content={quotes[index]}
								key={index}
								items={numberOfItems}
							/>
						))}
					</div>
				</div>
				<i
					className={`fa fa-chevron-right ${css`
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						right: 1em;
						@media (min-width: 600px) {
							right: 8%;
						}
					`}`}
					aria-hidden="true"
					onClick={nextHandle}
				></i>
			</div>
			<div
				className={css`
					margin-top: 1em;
					display: flex;
					justify-content: center;
				`}
			>
				<div
					className={css`
                    display: flex;

					span {
						height: 20px;
						width: 20px;
						margin: 0 3px;
						display: flex;
						align-items: center;
						justify-content: center;
						cursor: pointer;
					}

					span:before {
						content: "";
						height: 6px;
						width: 6px;
						background-color: #d4d4d4;
						border-radius: 50%;
						transition: background-color 0.3s ease;
					}
					span:hover:before {
						background-color: #45454d;
					}

					span[data-quote ="${active}"]:before{
						background-color: #45454d;
					}
				`}
				>
					{Object.keys(quotes).map((index) => (
						<span
							onClick={(event) => handleDotClick(event)}
							data-quote={index}
							key={index}
						></span>
					))}
				</div>
			</div>
		</div>
	);
};

export default SliderContent;
