import styles from './ShareArticleBtn.module.scss'
import iconShare from '@/assets/images/icon-share.svg'

interface Props {
  alt?: boolean
}

export default function ShareArticleBtn({ alt }: Props) {
  return (
    <div
      className={styles.shareBtn}
      data-toolip="Hello, World!"
    >
      <img
        className={styles.shareBtnImg}
        src={iconShare}
        alt=""
      />
    </div>
  )
}
