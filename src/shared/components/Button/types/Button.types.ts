import { ButtonHTMLAttributes, CSSProperties, MouseEventHandler, ReactNode } from 'react'


export type ButtonProps = {
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  style?: CSSProperties
  children?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>
