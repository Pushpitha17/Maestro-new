import { setCountdown } from "./setcount";

const appearOptions_fadein = {
	threshold: 1,
	rootMargin: "0px 0px 0px 0px",
};
export const appearOnScroll = new IntersectionObserver(function (
	entries,
	appearOnScroll
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.style.animation = "fadein 500ms ease";
			entry.target.classList.remove("fade-in");
			appearOnScroll.unobserve(entry.target);
		}
	});
},
appearOptions_fadein);

const appearOptions_countdown = {
	threshold: 1,
	rootMargin: "0px 0px -50px 0px",
};
export const appearCountdown = new IntersectionObserver(function (
	entries,
	appearCountdown
) {
	console.log(entries);
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			setCountdown("days", "hours", "minutes", "07", "01");
			appearOnScroll.unobserve(entry.target);
		}
	});
},
appearOptions_countdown);
