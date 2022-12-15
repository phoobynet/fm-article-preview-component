import styles from './ArticleFooter.module.scss'
import ArticleAuthor from '@/components/ArticleAuthor'
import ArticleShareSlideUp from '@/components/ArticleShareSlideUp'

export default function ArticleFooter() {
  return (
    <footer className={styles.articleFooter}>
      <div className={styles.normal}>
        <ArticleAuthor />
      </div>
      <div className={styles.alt}>
        <ArticleShareSlideUp />
      </div>
    </footer>
  )
}
