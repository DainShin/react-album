import styles from './CommonHeader.module.scss'

function CommonHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <img src="src/assets/images/image-logo.png" className={styles.header__logoBox__logo} alt="" />
        <span className={styles.header__logoBox__title}>PhotoSplash</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>Submit Photo</button>
        <button className={styles.header__profileBox__button}>Book Mark</button>
        <span className={styles.header__profileBox__userName}>Dain | Dain@Dontan</span>
      </div>
    </header>
  )
}

export default CommonHeader
