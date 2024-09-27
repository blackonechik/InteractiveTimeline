import { FC } from 'react';
import { EventTypeChangerProps } from '../types';
import styles from './EventTypeChanger.module.scss';
import { ChangerIcon, SmallChangerIcon } from './icons';
import clsx from 'clsx';
import { EventTypes } from 'features/timeLine';
import { Typography } from 'shared/components/Typography';
import { Button } from 'shared/components/Button';
export const EventTypeChanger: FC<EventTypeChangerProps> = ({ currentType, onTypeChange }) => {
	const allTypes = Object.values(EventTypes);
	const targetIndex = allTypes.indexOf(currentType);

	const handleChange = (index: number) => {
		onTypeChange(allTypes[targetIndex - index])
	}
	return (
		<div className={styles['event-type-changer']}>
			<Typography className={styles['event-type-changer__title']} variant="body2">{targetIndex + 1}/{allTypes.length}</Typography>
			<div className={styles['event-type-changer__wrapper']}>
				<Button
					disabled={targetIndex === 0}
					className={styles['event-type-changer__button']}
					onClick={() => handleChange(1)}
				>
					<ChangerIcon className={styles['event-type-changer__icon']} />
					<SmallChangerIcon className={styles['event-type-changer__icon--small']} />
				</Button>
				<Button
					disabled={targetIndex === allTypes.length - 1}
					className={clsx(styles['event-type-changer__button'], styles['event-type-changer__button--reverse'])}
					onClick={() => handleChange(-1)}
				>
					<ChangerIcon className={styles['event-type-changer__icon']} />
					<SmallChangerIcon className={styles['event-type-changer__icon--small']} />
				</Button>
			</div>
			<div className={styles['dots']}>
				{allTypes.map((type, index) => (
					<Button
						key={type}
						disabled={index === targetIndex}
						className={clsx(
							styles['dots__button'],
							index === targetIndex && styles['dots__button--active']
						)}
						onClick={() => onTypeChange(type)}
					/>
				))}

			</div>
		</div>
	)
}