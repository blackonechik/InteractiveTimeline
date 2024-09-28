

import { useState } from 'react';
import { SwiperClass } from 'swiper/react';

export const useEventsList = () => {
	const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

	const handleSlideChange = (swiper: SwiperClass) => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	return {
		swiperInstance,
		setSwiperInstance,
		isBeginning,
		isEnd,
		handleSlideChange
	};
};
