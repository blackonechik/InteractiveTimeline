import { FC } from 'react';
import { EventCardProps } from '../types';
import styles from './EventCard.module.scss'
import { Typography } from 'shared/components/Typography';

export const EventCard: FC<EventCardProps> = ({year, description}) => {
	return (
		<article className={styles["event-card"]}>
			<Typography variant='body1'>{year}</Typography>
			<Typography variant='body2'>{description}</Typography>
		</article>
	)
}