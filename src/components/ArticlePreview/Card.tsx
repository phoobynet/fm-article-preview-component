import styles from './Card.module.scss'
import drawers from '@/assets/images/drawers.jpg'
import Author from '@/components/ArticlePreview/Author'
import Share from '@/components/ArticlePreview/Share'

export default function Card() {
  return (
    <div className={styles.card}>
      <header className={styles.cardHeader}>
        <img
          src={drawers}
          alt=""
        />
      </header>
      <main>
        <div className={styles.cardMain}>
          <h1>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterNormal}>
            <Author />
          </div>
          <div className={styles.cardFooterAlt}>
            <Share />
          </div>
        </div>
      </main>
    </div>
  )
}
