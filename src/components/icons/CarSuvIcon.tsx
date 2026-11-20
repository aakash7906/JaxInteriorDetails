import React from 'react'

export interface CarSuvIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

/**
 * SUV / Car side-profile icon matching the exact silhouette requested:
 * Boxy SUV roofline, angled windshield, hood, wheel wells, and two circular wheels.
 */
export const CarSuvIcon: React.FC<CarSuvIconProps> = ({
  size = 20,
  className = '',
  strokeWidth = 2,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Wheels */}
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />

      {/* SUV / Crossover Side Chassis Body Line */}
      <path d="M5 17H3.5a1.5 1.5 0 0 1-1.5-1.5v-3.5c0-.6.4-1.2 1-1.4l2.5-.9 3-4.2A2 2 0 0 1 10.1 5h4.4a2 2 0 0 1 1.6.8l3.4 4.2 2 .5a1.5 1.5 0 0 1 1.1 1.4v3.6a1.5 1.5 0 0 1-1.5 1.5H19" />

      {/* Underbody connection between wheels */}
      <path d="M9 17h6" />
    </svg>
  )
}

export default CarSuvIcon
