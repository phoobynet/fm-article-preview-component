import styles from './Demo.module.scss'
import share from '@/assets/images/icon-share.svg'

export default function Demo() {
  return (
    <div className={styles.demo}>
      <main>
        <div data-popover-target>
          <img
            src={share}
            alt=""
          />
          <div data-popover>
            <p>I&apos;m a popover</p>
          </div>
        </div>
      </main>
    </div>
  )
}
