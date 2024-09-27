import { ReactNode } from 'react'

export type TypographyElement = 'h1' | "strong" | 'p' | 'span'

export type TypographyVariant =
  | 'h1'
  | 'big-strong'
  | 'body1'
  | 'body2'
  | 'body3'

export type TypographyWeight = 400 | 600 | 700

export type TypographyColor = 'black-blue' | 'light-blue' | 'transparent-light-blue' | 'fuchsia' | "iris"

export interface TypographyProps {
  as?: TypographyElement
  variant?: TypographyVariant
  weight?: TypographyWeight
  color?: TypographyColor
  className?: string
  children: ReactNode
}
