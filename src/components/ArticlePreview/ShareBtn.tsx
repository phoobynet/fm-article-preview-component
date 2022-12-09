import styles from './ShareBtn.module.scss'
import iconShare from '@/assets/images/icon-share.svg'

interface Props {
  alt?: boolean
}

export default function ShareBtn({ alt }: Props) {
  return (
    <div className={`${alt ? styles.shareBtnAlt : styles.shareBtn}`}>
      <img
        className={`${alt ? styles.shareBtnImgAlt : styles.shareBtnImg}`}
        src={iconShare}
        alt=""
      />
    </div>
  )
}
