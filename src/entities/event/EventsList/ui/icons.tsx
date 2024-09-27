import { FC } from 'react'
import { IconSvgProps } from 'shared/types/icon.types';

export const SwiperIcon: FC<IconSvgProps> = ({ size = 40, width, height, ...props }) => (
	<svg fill="none" height={size || height} viewBox="15 15 40 40" width={size || width} {...props}>
		<g filter="url(#filter0_d_25_27)">
    <circle cx="35" cy="35" r="20" fill="white"/>
  </g>
  <path d="M38 40L33 35L38 30" stroke="#3877EE" strokeWidth="2"/>
  <defs>
    <filter id="filter0_d_25_27" x="0" y="0" width="70" height="70" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="7.5"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.219608 0 0 0 0 0.466667 0 0 0 0 0.933333 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_27"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_27" result="shape"/>
    </filter>
  </defs>
	</svg>
)
