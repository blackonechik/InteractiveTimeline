

import { useEffect, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import { ITEM_WIDTH } from '../../constants';
import { debounce } from 'shared/libs';

export const useEventsList = () => {
	const [slidesPerView, setSlidesPerView] = useState(1);
	const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

	const updateSlidesPerView = () => {
		const width = window.innerWidth;
		setSlidesPerView(Math.floor(width / ITEM_WIDTH));
	};

	useEffect(() => {
		updateSlidesPerView();
		const debouncedUpdate = debounce(updateSlidesPerView, 200);
		window.addEventListener('resize', debouncedUpdate);
		return () => {
			window.removeEventListener('resize', debouncedUpdate);
		};
	}, []);

	const handleSlideChange = (swiper: SwiperClass) => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	return {
		slidesPerView,
		swiperInstance,
		setSwiperInstance,
		isBeginning,
		isEnd,
		handleSlideChange
	};
};
