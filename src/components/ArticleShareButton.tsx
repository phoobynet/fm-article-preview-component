import styles from './ArticleShareButton.module.scss'
import iconShare from '@/assets/images/icon-share.svg'

export default function ArticleShareButton() {
  return (
    <div
      className={styles.articleShareButton}
      data-toolip="Hello, World!"
    >
      <img
        className={styles.articleShareButtonImg}
        src={iconShare}
        alt=""
      />
    </div>
  )
}
