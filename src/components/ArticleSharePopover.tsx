import styles from './ArticleSharePopover.module.scss'
import Icon from '@/components/ArticleSocialIcon'

export default function ArticleSharePopover() {
  return (
    <div className={styles.articleSharePopover}>
      <div className={styles.social}>
        <div className={styles.label}>share</div>
        <Icon company="facebook" />
        <Icon company="twitter" />
        <Icon company="pinterest" />
      </div>
    </div>
  )
}
