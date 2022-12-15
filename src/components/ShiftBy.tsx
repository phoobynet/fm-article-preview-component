import { PropsWithChildren } from 'react'

interface Props {
  x: number
  y: number
}

// This is a component that shifts its children by x and y pixels.
// Use for subtle adjustments to layout.
export default function ShiftBy({
  x = 0,
  y = 0,
  children,
  ...delegated
}: PropsWithChildren<Props>) {
  return (
    <div
      {...delegated}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      {children}
    </div>
  )
}
