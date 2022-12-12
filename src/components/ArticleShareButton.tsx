import styles from './ArticleShareButton.module.scss'
import iconShare from '@/assets/images/icon-share.svg'
import { useMemo } from 'react'

interface Props {
  alt?: boolean
}

export default function ArticleShareButton({ alt }: Props) {
  const classPrefix = useMemo(
    () => (alt ? 'articleShareButtonAlt' : 'articleShareButton'),
    [alt],
  )

  return (
    <div
      className={styles[classPrefix]}
      data-toolip="Hello, World!"
    >
      <img
        className={styles[`${classPrefix}Img`]}
        src={iconShare}
        alt=""
      />
    </div>
  )
}
