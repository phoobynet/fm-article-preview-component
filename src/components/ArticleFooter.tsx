import styles from './ArticleFooter.module.scss'
import ArticleAuthor from '@/components/ArticleAuthor'
import ArticleShare from '@/components/ArticleShare'
import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function ArticleFooter() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <footer
      className={styles.articleFooter}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className={styles.normal}>
        <ArticleAuthor />
      </div>
      <div className={styles.alt}>
        <ArticleShare />
      </div>
    </footer>
  )
}
