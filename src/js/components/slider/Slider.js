import React, { useState } from "react";
import SliderContent from "./SliderContent";
import { css } from "emotion";

const Slider = () => {
	return (
		<div
			className={css`
				width: 100%;
			`}
		>
			<SliderContent />
		</div>
	);
};

export default Slider;
