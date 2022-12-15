import styles from './ArticleShareButton.module.scss'
import iconShare from '@/assets/images/icon-share.svg'
import ArticleShare from '@/components/ArticleShare'
import { useState } from 'react'
import { Popover } from 'react-tiny-popover'

export default function ArticleShareButton() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  return (
    <Popover
      isOpen={true}
      positions={['top']}
      content={<ArticleShare displayAs="popover" />}
    >
      <div
        className={styles.articleShareButton}
        onMouseEnter={() => setIsPopoverOpen(true)}
        onMouseLeave={() => setIsPopoverOpen(false)}
      >
        <img
          className={styles.articleShareButtonImg}
          src={iconShare}
          alt=""
        />
      </div>
    </Popover>
  )
}
