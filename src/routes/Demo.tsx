import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: 70%;
  margin: 3rem auto 0;
`

const Popover = styled.div`
  font-size: 1.5rem;
  position: absolute;
  height: 50px;
  width: 100px;
  top: 0;
  background-color: #000;
  opacity: 0.5;
  color: #f9fff9;
`

const RenderPortal = ({ children }: PropsWithChildren) => {
  return createPortal(children, document.getElementById('portal')!)
}

export default function Demo() {
  const [show, setShow] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [width, setWidth] = useState(0)
  const pop = useRef<HTMLDivElement>(null)

  const buttonRef = useRef<HTMLButtonElement>(null)
  const buttonRect = useRef<DOMRect>()

  const handleButtonRef = (el: HTMLButtonElement) => {
    if (!el) return

    const domRect = el.getBoundingClientRect()
    setX(domRect.x)
    setY(domRect.y)
    setWidth(domRect.width)
  }

  useEffect(() => {
    buttonRect.current = buttonRef.current?.getBoundingClientRect()
  }, [])

  const onClick = () => {
    setShow((state) => !state)
  }

  return (
    <Container>
      <RenderPortal>{show && <Popover ref={pop}>Hello</Popover>}</RenderPortal>
      <button
        onClick={onClick}
        ref={handleButtonRef}
      >
        Click Me
      </button>

      {x && (
        <p>
          x: {x}, y: {y}, width: {width}
        </p>
      )}
    </Container>
  )
}
