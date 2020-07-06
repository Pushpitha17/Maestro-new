import React, { useState } from "react";
// import "./Testimonials.scss";
import { css } from "emotion";

const quotes = {
	0: {
		name: "Prog You",
		uni: "Follower of Lord Gaben",
		quote:
			"Dota is the best game ever!!  Dota is the best game ever!!  Dota is the best game ever!!  Dota is the best game ever!!",
	},
	1: {
		name: "Prog You",
		uni: "Follower of Lord Gaben",
		quote:
			"Dota is the best game ever!!  Dota is the best game ever!!  Dota is the best game ever!!  Dota is the best game ever!!",
	},
	2: {
		name: "Prog You",
		uni: "Follower of Lord Gaben",
		quote:
			"Dota is the best game ever!!  Dota is the best game ever!!  Dota is the best game ever!!  Dota is the best game ever!!",
	},
	3: {
		name: "Prog You",
		uni: "Follower of Lord Gaben",
		quote:
			"Dota is the best game ever!!  Dota is the best game ever!!  Dota is the best game ever!!  Dota is the best game ever!!",
	},
};

const Testimonials = () => {
	const [current, setCurrent] = useState(quotes[0]);

	const [active, setActive] = useState(0);

	const handleSetClick = (event) => {
		setCurrent(quotes[event.target.getAttribute("data-quote")]);
		setActive(event.target.getAttribute("data-quote"));
		console.log("Hellow");
	};

	return (
		<div className="testimonial-content">
			<h3>Testimonials</h3>
			<blockquote>{current.quote}</blockquote>
			<p className="name">{current.name}</p>
			<p className="uni">{current.uni}</p>
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
						onClick={(event) => handleSetClick(event)}
						data-quote={index}
						key={index}
					></span>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
