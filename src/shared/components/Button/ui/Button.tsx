import { forwardRef } from 'react'
import { ButtonProps } from '../types'
import styles from './Button.module.scss'
import clsx from 'clsx';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      onClick,
      style,
      children,
      ...props
    },
    ref,
  ) => {

    return (
      <button className={clsx(styles["button"], className)} onClick={onClick} ref={ref} style={style} {...props}>
        {children}
      </button>
    )
  },
)
