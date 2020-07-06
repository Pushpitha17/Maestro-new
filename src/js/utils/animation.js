import gsap from "gsap";
import { Power2 } from "gsap";

export const Quote_animation = () => {
	const tl = gsap.timeline();

	const seq1 = document.querySelector(".animation-s1");
	const seq2 = document.querySelector(".animation-s2");

	tl.fromTo(seq1, 0.5, { ease: Power2.easeOut }, { opacity: 1 });
	tl.fromTo(seq2, 0.75, { ease: Power2.easeOut }, { opacity: 1 });
};
