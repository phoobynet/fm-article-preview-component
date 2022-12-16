import styles from './ArticleHeader.module.scss'
import drawers from '@/assets/images/drawers.jpg'

export default function ArticleHeader() {
  return (
    <header className={styles.articleHeader}>
      <img
        src={drawers}
        alt=""
        className={styles.articleHeaderImg}
      />
    </header>
  )
}
