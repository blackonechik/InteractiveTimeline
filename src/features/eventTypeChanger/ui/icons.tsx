import { FC } from 'react'
import { IconSvgProps } from '../../../shared/types/icon.types';

export const ChangerIcon: FC<IconSvgProps> = ({ ...props }) => (
	<svg fill="none" height="100%" viewBox="0 0 50 50" width="100%" {...props}>
		<circle cx="25" cy="25" r="24.5" transform="matrix(-1 0 0 1 50 0)" stroke="#42567A" strokeOpacity="0.5" />
		<path d="M27.4999 18.75L21.2499 25L27.4999 31.25" stroke="#42567A" strokeWidth="2" />
	</svg>
)

export const SmallChangerIcon: FC<IconSvgProps> = ({ ...props }) => (
	<svg fill="none" height="100%" viewBox="0 0 25 25" width="100%" {...props}>
		<circle cx="12.5" cy="12.5" r="12" transform="matrix(-1 0 0 1 25 0.666718)" stroke="#42567A" strokeOpacity="0.5" />
		<path d="M13.7489 10.0418L10.6239 13.1668L13.7489 16.2918" stroke="#42567A" strokeWidth="2" />
	</svg>
)
