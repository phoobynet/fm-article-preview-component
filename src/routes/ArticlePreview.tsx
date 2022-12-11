import styles from './ArticlePreview.module.scss'
import drawers from '@/assets/images/drawers.jpg'
import Author from '@/components/ArticlePreview/Author'
import Share from '@/components/ArticlePreview/Share'
import { useRef, useState } from 'react'

export default function ArticlePreview() {
  const footer = useRef<HTMLDivElement>(null)
  const [showShare, setShowShare] = useState(false)

  return (
    <div className={styles.articlePreview}>
      <div className={styles.container}>
        <header>
          <img
            src={drawers}
            alt=""
          />
        </header>
        <main>
          <h1>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </main>
        <footer>
          <div className={styles.normal}>
            <Author />
          </div>
          <div className={styles.alt}>
            <Share />
          </div>
        </footer>
      </div>
    </div>
  )
}
