import styles from './ArticleShare.module.scss'
import ArticleShareButton from '@/components/ArticleShareButton'
import Icon, { SocialMediaCompany } from '@/components/ArticleSocialIcon'

const companies: SocialMediaCompany[] = ['facebook', 'pinterest', 'twitter']

export default function ArticleShare() {
  return (
    <div className={styles.articleShare}>
      <div className={styles.social}>
        <div className={styles.label}>share</div>
        {companies.map((company) => (
          <Icon
            company={company}
            key={company}
          />
        ))}
      </div>
      <div>
        <ArticleShareButton />
      </div>
    </div>
  )
}
