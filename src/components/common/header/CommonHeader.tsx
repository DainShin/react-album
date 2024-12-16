import { useNavigate } from 'react-router-dom'
import styles from './CommonHeader.module.scss'

function CommonHeader() {
  const navigate = useNavigate();

  // Bookmark page
  const moveToPage = () => {
    navigate('/bookmark');
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <img src="src/assets/images/image-logo.png" className={styles.header__logoBox__logo} alt="" />
        <span className={styles.header__logoBox__title}>PhotoSplash</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>Submit Photo</button>
        <button className={styles.header__profileBox__button} onClick={moveToPage}>Book Mark</button>
        <span className={styles.header__profileBox__userName}>Dain | Dain@Dontan</span>
      </div>
    </header>
  )
}

export default CommonHeader
