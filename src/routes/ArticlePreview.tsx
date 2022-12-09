import styles from './ArticlePreview.module.scss'
import author from '@/assets/images/avatar-michelle.jpg'
import drawers from '@/assets/images/drawers.jpg'
import iconShare from '@/assets/images/icon-share.svg'

export default function ArticlePreview() {
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
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src={author}
              alt=""
            />
            <div className={styles.details}>
              <div>Michelle Appleton</div>
              <div>28 Jun 2020</div>
            </div>
            <div className={styles.share}>
              <img
                src={iconShare}
                alt=""
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
