import styles from './DateCounter.module.scss';
import { FC } from 'react';
import { DateCounterProps } from '../types';
import { useYearCounter } from '../hooks';
import { Typography } from 'shared/components/Typography';

export const DateCounter: FC<DateCounterProps> = ({ events }) => {
  const { displayedMinYear, displayedMaxYear } = useYearCounter(events);

  return (
    <div className={styles['date-counter']}>
      <Typography variant="big-strong" as="span" color="iris">
        {displayedMinYear}
      </Typography>
      <Typography variant="big-strong" as="span" color="fuchsia">
        {displayedMaxYear}
      </Typography>
    </div>
  );
};
