import { FC } from 'react';
import { EventsListProps } from '../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { SwiperIcon } from './icons';

import styles from './EventsList.module.scss';
import 'swiper/swiper-bundle.css';
import { useEventsList } from '../hooks/useEventsList';
import { EventCard } from 'entities/event/EventCard';
import { Button } from 'shared/components/Button';

export const EventsList: FC<EventsListProps> = ({ events }) => {
    const {
        swiperInstance,
        setSwiperInstance,
        isBeginning,
        isEnd,
        handleSlideChange,
    } = useEventsList();

    return (
        <motion.div
            className={styles['events-list']}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, delay: 1 }}
            key={events.length}
        >
            {swiperInstance && (
                <>
                    <Button
                        onClick={() => swiperInstance.slidePrev()}
                        className={clsx(styles['events-list__button'], styles['events-list__button--prev'])}
                        style={{ display: isBeginning ? 'none' : 'block' }}
                    >
                        <SwiperIcon />
                    </Button>
                    <Button
                        onClick={() => swiperInstance.slideNext()}
                        className={clsx(styles['events-list__button'], styles['events-list__button--next'])}
                        style={{ display: isEnd ? 'none' : 'block' }}
                    >
                        <SwiperIcon />
                    </Button>
                </>
            )}

            <Swiper
                slidesPerView={3}
                className={styles['swiper-container']}
                navigation={false}
                onSwiper={setSwiperInstance}
                onSlideChange={handleSlideChange}
                spaceBetween={10} // Устанавливаем отступ в 10 пикселей

                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20, // Устанавливаем отступ в 20 пикселей для экранов шириной 320 пикселей и меньше
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30, // Устанавливаем отступ в 30 пикселей для экранов шириной от 321 пикселя до 640 пикселей
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40, // Устанавливаем отступ в 40 пикселей для экранов шириной от 641 пикселя до 1024 пикселей
                    },
                }}
            >


                {events
                    .sort((a, b) => a.year - b.year)
                    .map((event, index) => (
                        <SwiperSlide className={styles['events-list__item']} key={index}>
                            <EventCard {...event} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </motion.div>
    );
};
