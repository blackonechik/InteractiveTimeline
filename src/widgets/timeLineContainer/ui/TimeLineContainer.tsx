import { FC, useState } from 'react';

import styles from './TimeLineContainer.module.scss';
import { Typography } from 'shared/components/Typography';
import { DateCounter } from 'features/dateCounter';
import { EventTypes, timelineData } from 'features/timeLine';
import { EventsList } from 'entities/event';
import { EventTypeChanger } from 'features/eventTypeChanger';
import { TimeLine } from 'features/timeLine';

export const TimeLineContainer: FC = () => {
	const [currentType, setCurrentType] = useState<EventTypes>(EventTypes.history);

	return (
		<div className={styles["timeline"]}>
			<div className={styles["timeline__wrapper"]}>
				<Typography className={styles['title']} variant="h1">Исторические даты</Typography>
				<div className={styles["timeline__top"]}>
					<div className={styles["timeline__dateCounter"]}>
						<DateCounter events={timelineData[currentType]!.events} />
					</div>
					<div className={styles["timeline__timeLine"]}>
						<TimeLine currentType={currentType} onTypeChange={setCurrentType} />
						<div className={styles["timeline__background"]} />
					</div>
				</div>
				<div className={styles["timeline__bottom"]}>
					<EventTypeChanger currentType={currentType} onTypeChange={setCurrentType} />
					<EventsList events={timelineData[currentType]!.events} />
				</div>
			</div>
		</div>

	);
};
