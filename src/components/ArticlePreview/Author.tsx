import styles from './Author.module.scss'
import author from '@/assets/images/avatar-michelle.jpg'
import ArticleAuthorAvatar from '@/components/ArticleAuthorAvatar'
import ShareArticleBtn from '@/components/ArticlePreview/ShareArticleBtn'

export default function Author() {
  return (
    <div className={styles.author}>
      <ArticleAuthorAvatar url={author} />
      <div className={styles.details}>
        <div className={styles.name}>Michelle Appleton</div>
        <div className={styles.published}>28 Jun 2020</div>
      </div>
      <ShareArticleBtn />
    </div>
  )
}
