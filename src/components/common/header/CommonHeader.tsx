import { useNavigate } from 'react-router-dom'
import styles from './CommonHeader.module.scss'

function CommonHeader() {
  const navigate = useNavigate();

  // Bookmark page
  const moveToPage = (filter:string) => {
    if(filter === 'main') navigate('/')
    if(filter === 'bookmark') navigate('/bookmark');
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox} onClick={()=>moveToPage('main')}>
        <img src="/assets/images/image-logo.png" className={styles.header__logoBox__logo} alt="" />
        <span className={styles.header__logoBox__title}>PhotoSplash</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>Submit Photo</button>
        <button className={styles.header__profileBox__button} onClick={()=>moveToPage('bookmark')}>Book Mark</button>
        <span className={styles.header__profileBox__userName}>Dain | Dain@Georgian</span>
      </div>
    </header>
  )
}

export default CommonHeader
