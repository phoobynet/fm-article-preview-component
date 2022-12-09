import styles from './Avatar.module.scss'

interface Props {
  url: string
}

export default function Avatar({ url }: Props) {
  return (
    <img
      className={styles.avatar}
      src={url}
      alt=""
    />
  )
}
