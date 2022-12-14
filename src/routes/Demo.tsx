import styles from './Demo.module.scss'
import { useResizeObserver } from '@react-hookz/web'
import { PropsWithChildren, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface PopoverProps {
  rect?: DOMRect
}

const Popover = ({ rect, children }: PropsWithChildren<PopoverProps>) => {}
const PopoverPortal = ({ children, rect }: PropsWithChildren<PopoverProps>) => {
  if (!rect) return null
  return createPortal(
    <div
      className={styles.popover}
      style={{
        position: 'absolute',
        top: rect.top - 10,
        left: rect.left,
      }}
    >
      {children}
    </div>,
    document.getElementById('popover')!,
  )
}

export default function Demo() {
  const target = useRef<HTMLDivElement>(null)
  const [showPopover, setShowPopover] = useState(true)
  const [rect, setRect] = useState<DOMRect>()
  useResizeObserver(target, (e) => {
    if (target.current) {
      setRect(target.current.getBoundingClientRect())
    }
  })

  return (
    <div className={styles.demo}>
      <div
        style={{
          width: 200,
          height: 200,
          border: '1px solid blue',
          overflow: 'hidden',
        }}
      >
        <div
          ref={target}
          className={styles.target}
          onMouseEnter={() => setShowPopover(true)}
          onMouseLeave={() => setShowPopover(false)}
        >
          <div className={styles.targetContent}>I am the target</div>
        </div>
      </div>
      <PopoverPortal rect={rect}>
        {showPopover && (
          <div className={styles.popover}>
            <div className={styles.popoverContent}>This is a popover</div>
            <div className={styles.popoverArrow}></div>
          </div>
        )}
      </PopoverPortal>
      <div>
        <pre>{JSON.stringify(rect, null, 2)}</pre>
      </div>
    </div>
  )
}
