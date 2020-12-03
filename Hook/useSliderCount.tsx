import { useState, useRef, useEffect } from "react";
import { scrollToTarget } from "../util/scroll";

const useSliderCount = () => {
	const [count, setCount] = useState(0);
	const slider = useRef<HTMLUListElement>(null);

	const handleScroll = (e: any) => {
		const count = Math.round(e.target.scrollLeft / e.target.clientWidth);
		setCount(count);
	};

	const indecatorClicked = (id: number) => {
		if (slider.current) {
			const target = slider.current.clientWidth * id;
			scrollToTarget(slider.current, target);
		}
	};

	const slideUp = () => {
		if (slider.current) {
			const target = slider.current.clientWidth * (count + 1);
			scrollToTarget(slider.current, target);
		}
	};
	const slideDown = () => {
		if (slider.current) {
			const target = slider.current.clientWidth * (count - 1);
			scrollToTarget(slider.current, target);
		}
	};

	useEffect(() => {
		if (slider !== null && slider.current !== null) {
			slider.current.addEventListener("scroll", handleScroll);
		}
	}, [slider]);

	return { count, slider, indecatorClicked, slideUp, slideDown };
};

export default useSliderCount;
