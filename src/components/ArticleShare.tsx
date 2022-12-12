import styles from './ArticleShare.module.scss'
import facebook from '@/assets/images/icon-facebook.svg'
import pinterest from '@/assets/images/icon-pinterest.svg'
import twitter from '@/assets/images/icon-twitter.svg'
import ArticleShareButton from '@/components/ArticleShareButton'

export default function ArticleShare() {
  return (
    <div className={styles.articleShare}>
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
        <ArticleShareButton alt={true} />
      </div>
    </div>
  )
}
