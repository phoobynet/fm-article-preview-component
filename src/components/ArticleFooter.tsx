import styles from './ArticleFooter.module.scss'
import ArticleAuthor from '@/components/ArticleAuthor'
import ArticleShare from '@/components/ArticleShare'

export default function ArticleFooter() {
  return (
    <footer className={styles.articleFooter}>
      <div className={styles.normal}>
        <ArticleAuthor />
      </div>
      <div className={styles.alt}>
        <ArticleShare />
      </div>
    </footer>
  )
}
