import { PropsWithChildren, ReactNode, useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

interface Props {
  show: boolean
  target: HTMLElement | ReactNode
}

const PopoverContainer = styled.div`
  position: absolute;
`

export default function Popover({ children, show }: PropsWithChildren<Props>) {
  const popoverEl = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    let popover = document.getElementById('popover')

    if (!popover) {
      popover = document.createElement('div')
      popover.id = 'popover'
      popover.style.position = 'absolute'
      document.body.appendChild(popover)

      popoverEl.current = popover
    }
  }, [])

  if (!popoverEl.current) {
    return null
  }

  if (!show) {
    return null
  }

  return createPortal(
    <PopoverContainer>{children}</PopoverContainer>,
    popoverEl.current!,
  )
}
