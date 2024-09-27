import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './TimeLine.module.scss';
import { EventTypes, TimeLineProps } from '../types';
import { DEFAULT_CIRCLE_RADIUS, TYPE_TO_NAME } from '../constants';
import clsx from 'clsx';
import { Button } from 'shared/components/Button';
import { Typography } from 'shared/components/Typography';

export const TimeLine: FC<TimeLineProps> = ({ currentType, onTypeChange }) => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const targetIndex = Object.values(EventTypes).indexOf(currentType);
    const targetAngle = - 60 - (targetIndex * 360) / Object.values(EventTypes).length;
    setRotationAngle(targetAngle);
  }, [currentType]);

  const handleClick = (type: EventTypes) => {
    onTypeChange(type);
  };

  return (
    <>
      <div className={styles['timeline-container']}>
        <motion.div
          className={styles['circle']}
          style={{ position: 'relative', width: `${DEFAULT_CIRCLE_RADIUS * 2}px`, height: `${DEFAULT_CIRCLE_RADIUS * 2}px` }}
          animate={{ rotate: rotationAngle }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {Object.values(EventTypes).map((type, index) => {
            const angle = (index * 360) / Object.values(EventTypes).length;
            const rad = (angle * Math.PI) / 180;
            const x = DEFAULT_CIRCLE_RADIUS * Math.cos(rad);
            const y = DEFAULT_CIRCLE_RADIUS * Math.sin(rad);

            return (
              <div
                key={type}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <motion.div
                  animate={{ rotate: -rotationAngle }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transformOrigin: '50% 50%',
                  }}
                >
                  <Button
                    className={clsx(styles['circle-button'], {
                      [styles['circle-button--active']]: type === currentType,
                    })}
                    onClick={() => handleClick(type)}
                  >
                    <Typography
                      as='span'
                      variant="body2"
                      className={styles['circle-button__number']}>{index + 1}</Typography>
                  </Button>
                  <Typography
                    as='span'
                    className={clsx(styles['circle-button__info'], {
                      [styles['circle-button__info--active']]: type === currentType
                    })}
                    variant="body2"
                    weight={700}>{TYPE_TO_NAME[type]}</Typography>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.25, delay: 1 }}
        key={currentType}
      >
        <Typography
          as="span"
          variant="body2"
          className={styles['title-current']}
          weight={700}>
          {TYPE_TO_NAME[currentType]}
        </Typography>
      </motion.div>

    </>
  );
}
