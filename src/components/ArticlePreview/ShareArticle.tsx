import styles from './ShareArticle.module.scss'
import facebook from '@/assets/images/icon-facebook.svg'
import pinterest from '@/assets/images/icon-pinterest.svg'
import twitter from '@/assets/images/icon-twitter.svg'
import ShareArticleBtn from '@/components/ArticlePreview/ShareArticleBtn'

export default function ShareArticle() {
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
        <ShareArticleBtn alt={true} />
      </div>
    </div>
  )
}
