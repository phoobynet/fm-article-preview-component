import styles from './Article.module.scss'
import ArticleFooter from '@/components/ArticleFooter'
import ArticleHeader from '@/components/ArticleHeader'
import ArticleMain from '@/components/ArticleMain'

export default function Article() {
  return (
    <article className={styles.article}>
      <ArticleHeader />
      <div className={styles.layout}>
        <ArticleMain />
        <ArticleFooter />
      </div>
    </article>
  )
}
