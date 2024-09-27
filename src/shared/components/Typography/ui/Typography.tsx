import clsx from 'clsx'

import { TypographyElement, TypographyProps } from '../types'

import styles from './Typography.module.scss'

export const Typography: React.FC<TypographyProps> = ({
  as,
  weight,
  color,
  variant = 'body1',
  className,
  children,
  ...props
}) => {
  const Element = as ?? (/^h[1-6]$/.test(variant) ? (variant as TypographyElement) : 'p')

  return (
    <Element
      className={clsx(className, styles[variant], {
        [styles[`weight-${weight!}`]]: !!weight,
        [styles[`color-${color!}`]]: !!color,
      })}
      {...props}
    >
      {children}
    </Element>
  )
}
