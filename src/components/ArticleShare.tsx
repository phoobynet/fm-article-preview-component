import styles from './ArticleShare.module.scss'
import ArticleShareButton from '@/components/ArticleShareButton'
import Icon, { SocialMediaCompany } from '@/components/ArticleSocialIcon'

const companies: SocialMediaCompany[] = ['facebook', 'twitter', 'pinterest']

interface Props {
  displayAs?: 'normal' | 'popover'
}

export default function ArticleShare({ displayAs }: Props) {
  return (
    <div
      className={styles.articleShare}
      data-display-as={displayAs}
      id="cunt"
    >
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
