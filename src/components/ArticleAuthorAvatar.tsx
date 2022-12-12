import styles from './ArticleAuthorAvatar.module.scss'

interface Props {
  url: string
}

export default function ArticleAuthorAvatar({ url }: Props) {
  return (
    <img
      className={styles.avatar}
      src={url}
      alt=""
    />
  )
}
