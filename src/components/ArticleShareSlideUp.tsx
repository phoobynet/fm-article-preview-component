import styles from './ArticleShareSlideUp.module.scss'
import ArticleShareButton from '@/components/ArticleShareButton'
import Icon from '@/components/ArticleSocialIcon'

export default function ArticleShareSlideUp() {
  return (
    <div className={styles.articleShareSlideUp}>
      <div className={styles.social}>
        <div className={styles.label}>share</div>
        <Icon company="facebook" />
        <Icon company="twitter" />
        <Icon company="pinterest" />
      </div>
      <div>
        <ArticleShareButton popover={false} />
      </div>
    </div>
  )
}
