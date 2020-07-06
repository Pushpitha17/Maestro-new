import { CountUp } from "countup.js";
var timediff = require("timediff");

export const setCountdown = (
	id_days_el,
	id_hours_el,
	id_minutes_el,
	month,
	day
) => {
	const now = new Date();

	const time_span = new timediff(
		now,
		new Date(2020, parseInt(month), parseInt(day))
	);
	console.log(time_span);

	const add_prefix = (value) => {
		if (value < 10) return { prefix: "0" };
		else return {};
	};

	var countUp_days = new CountUp(
		id_days_el,
		time_span.days + time_span.weeks * 7,
		add_prefix(time_span.days + time_span.weeks * 7)
	);
	var countUp_hours = new CountUp(
		id_hours_el,
		time_span.hours,
		add_prefix(time_span.hours)
	);
	var countUp_minutes = new CountUp(
		id_minutes_el,
		time_span.minutes,
		add_prefix(time_span.minutes)
	);

	countUp_days.start();
	countUp_hours.start();
	countUp_minutes.start();
};
