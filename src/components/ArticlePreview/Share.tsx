import styles from './Share.module.scss'
import facebook from '@/assets/images/icon-facebook.svg'
import pinterest from '@/assets/images/icon-pinterest.svg'
import twitter from '@/assets/images/icon-twitter.svg'
import ShareBtn from '@/components/ArticlePreview/ShareBtn'

export default function Share() {
  return (
    <div className={styles.share}>
      <div className={styles.label}>share</div>
      <div className={styles.social}>
        <img
          src={facebook}
          alt="Facebook"
        />
        <img
          src={twitter}
          alt="Twitter"
        />
        <img
          src={pinterest}
          alt="Pinterest"
        />
      </div>
      <div>
        <ShareBtn alt={true} />
      </div>
    </div>
  )
}
