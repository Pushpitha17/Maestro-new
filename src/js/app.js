import { Quote_animation } from "./utils/animation";
import { appearOnScroll, appearCountdown } from "./utils/intersections";
import { navSlide } from "./utils/slidenav";
import gsap from "gsap";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "./components/slider/Slider";
import Faqs from "./components/Faqs/Faqs";

export const app = () => {
	const countdown_el = document.getElementById("countdown-grid");
	const faders = document.querySelectorAll(".fade-in");
	const loader = document.getElementById("loader");
	const tl = gsap.timeline();

	window.addEventListener("load", (event) => {
		setTimeout(() => {
			loader.style.pointerEvents = "none";
			loader.style.display = "none";
		}, 1000);
		tl.to("#loader img", { duration: 0.25, height: "0" }).to(loader, {
			duration: 0.75,
			height: "0",
		});

		navSlide();
		setTimeout(Quote_animation, 1000);
	});

	faders.forEach((fader) => {
		appearOnScroll.observe(fader);
	});

	appearCountdown.observe(countdown_el);

	ReactDOM.render(<Slider />, document.getElementById("root"));
	ReactDOM.render(<Faqs />, document.getElementById("faq"));
};
