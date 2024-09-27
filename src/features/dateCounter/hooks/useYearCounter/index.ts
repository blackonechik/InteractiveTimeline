import { useState, useEffect } from 'react';

import { Event } from '../../../../features/timeLine/types';

export const useYearCounter = (events: Event[]) => {
  const minYear = Math.min(...events.map(event => event.year));
  const maxYear = Math.max(...events.map(event => event.year));

  const [displayedMinYear, setDisplayedMinYear] = useState(minYear);
  const [displayedMaxYear, setDisplayedMaxYear] = useState(maxYear);

  const animateYearChange = (from: number, to: number, setYear: React.Dispatch<React.SetStateAction<number>>) => {
    const step = from > to ? -1 : 1;
    const difference = Math.abs(from - to);
    const intervalDuration = 1000 / difference;

    const interval = setInterval(() => {
      setYear(prevYear => {
        const nextYear = prevYear + step;
        if ((step === 1 && nextYear >= to) || (step === -1 && nextYear <= to)) {
          clearInterval(interval);
          return to;
        }
        return nextYear;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    if (minYear !== displayedMinYear) {
      animateYearChange(displayedMinYear, minYear, setDisplayedMinYear);
    }
  }, [minYear]);

  useEffect(() => {
    if (maxYear !== displayedMaxYear) {
      animateYearChange(displayedMaxYear, maxYear, setDisplayedMaxYear);
    }
  }, [maxYear]);

  return { displayedMinYear, displayedMaxYear };
};

