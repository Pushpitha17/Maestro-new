export const navSlide = () => {
	let burger_click = 0;
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");
	const navIcons = document.querySelector(".nav-icons");
	const body = document.querySelector("body");

	burger.addEventListener("click", () => {
		if (burger_click) {
			burger_click = 0;
		} else {
			burger_click = 1;
		}
		//toggle nav
		nav.classList.toggle("nav-active");
		navIcons.classList.toggle("nav-active");

		//animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navlinkFade 0.5s ease forwards ${
					index / 7 + 0.5
				}s`;
			}
		});

		const burger_animation = () => {
			const line1 = burger.querySelector(".line1");
			const line2 = burger.querySelector(".line2");
			const line3 = burger.querySelector(".line3");
			const slide_els = document.querySelectorAll(".slide");

			if (burger_click) {
				line1.style.transform = "rotate(-45deg) translate(-5px, 6px)";
				line2.style.opacity = "0";
				line3.style.transform = "rotate(45deg) translate(-5px, -6px)";
				//burger
				burger.style.position = "fixed";
				burger.style.right = "1em";

				slide_els.forEach((el) => {
					el.style.display = "block";
					setTimeout(() => {
						el.style.transform = "translateX(0%)";
						el.style.position = "fixed";
						// body.style.overflowY = "hidden";
					});
				});
			} else {
				line1.style.transform = "";
				line2.style.opacity = "1";
				line3.style.transform = "";
				burger.style.position = "";

				slide_els.forEach((el) => {
					// body.style.overflowY = "";
					el.style.position = "";
					el.style.transform = "translateX(100%)";
					setTimeout(() => {
						el.style.display = "none";
					});
				});
			}
		};
		//burger animation
		burger_animation();

		// if (nav.classList.contains("nav-active")) {
		// 	body.style.overflowY = "hidden";
		// 	body.style.position = "";
		// } else {
		// 	body.style.position = "relative";
		// 	body.style.overflowY = "";
		// }
	});
};
