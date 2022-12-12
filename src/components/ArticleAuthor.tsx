import styles from './ArticleAuthor.module.scss'
import author from '@/assets/images/avatar-michelle.jpg'
import ArticleAuthorAvatar from '@/components/ArticleAuthorAvatar'
import ArticleShareButton from '@/components/ArticleShareButton'

export default function ArticleAuthor() {
  return (
    <div className={styles.articleAuthor}>
      <ArticleAuthorAvatar url={author} />
      <div className={styles.details}>
        <div className={styles.name}>Michelle Appleton</div>
        <div className={styles.published}>28 Jun 2020</div>
      </div>
      <ArticleShareButton />
    </div>
  )
}
