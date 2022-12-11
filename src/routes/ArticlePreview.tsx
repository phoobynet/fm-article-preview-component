import styles from './ArticlePreview.module.scss'
import Card from '@/components/ArticlePreview/Card'

export default function ArticlePreview() {
  return (
    <div className={styles.articlePreview}>
      <Card />
    </div>
  )
}
