import styles from './ArticleShareButton.module.scss'
import iconShare from '@/assets/images/icon-share.svg'
import ArticleSharePopover from '@/components/ArticleSharePopover'
import ShiftBy from '@/components/ShiftBy'
import { useState } from 'react'
import { ArrowContainer, Popover } from 'react-tiny-popover'

interface Props {
  popover?: boolean
}

export default function ArticleShareButton({ popover }: Props) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const arrow = (
    <ShiftBy
      x={1}
      y={-1}
    >
      <img
        className={styles.articleShareButtonImg}
        src={iconShare}
        alt=""
      />
    </ShiftBy>
  )

  if (popover) {
    return (
      <Popover
        isOpen={true}
        positions={['top']}
        padding={11}
        content={({ position, childRect, popoverRect }) => (
          <ArrowContainer
            position={position}
            childRect={childRect}
            popoverRect={popoverRect}
            arrowColor={'hsl(217deg 19% 35%)'}
            arrowSize={10}
          >
            <ArticleSharePopover />
          </ArrowContainer>
        )}
      >
        <div
          className={styles.articleShareButton}
          onMouseEnter={() => setIsPopoverOpen(true)}
          onMouseLeave={() => setIsPopoverOpen(false)}
        >
          {arrow}
        </div>
      </Popover>
    )
  }

  return <div className={styles.articleShareButton}>{arrow}</div>
}
