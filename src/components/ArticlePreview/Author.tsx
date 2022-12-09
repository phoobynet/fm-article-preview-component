import styles from './Author.module.scss'
import author from '@/assets/images/avatar-michelle.jpg'
import Avatar from '@/components/ArticlePreview/Avatar'
import ShareBtn from '@/components/ArticlePreview/ShareBtn'

export default function Author() {
  return (
    <div className={styles.author}>
      <Avatar url={author} />
      <div className={styles.details}>
        <div>Michelle Appleton</div>
        <div>28 Jun 2020</div>
      </div>
      <ShareBtn />
    </div>
  )
}
