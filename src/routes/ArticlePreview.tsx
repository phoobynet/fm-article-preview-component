import styles from './ArticlePreview.module.scss'
import Article from '@/components/Article'

export default function ArticlePreview() {
  return (
    <div className={styles.articlePreview}>
      <Article />
    </div>
  )
}
