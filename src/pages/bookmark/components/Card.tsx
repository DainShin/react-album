import { CardDTO } from '@/pages/index/types/card'
import styles from './Card.module.scss'

interface Props {
  prop: CardDTO
}

function Card({ prop } : Props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__imageBox}>
        <img className={styles.card__imageBox__image} src={prop.urls.small} alt="" />
      </div>
      <div className={styles.card__infoBox}>
        <div className={styles.card__infoBox__row}>
            <span className={styles.label}>Author</span>
            <span className={styles.value}>{prop.user.name}</span>
        </div>
        <div className={styles.card__infoBox__row}>
            <span className={styles.label}>Image Size</span>
            <span className={styles.value}>{prop.width} x {prop.height}</span>
        </div>
        <div className={styles.card__infoBox__row}>
            <span className={styles.label}>Uploaded Date</span>
            <span className={styles.value}>{prop.created_at.split('T')[0]}</span>
        </div>
        <div className={styles.card__infoBox__row}>
            <span className={styles.label}>Last Updated</span>
            <span className={styles.value}>{prop.updated_at.split('T')[0]}</span>
        </div>
        <div className={styles.card__infoBox__row}>
            <span className={styles.label}>Download Number</span>
            <span className={styles.value}>{prop.likes}</span>
        </div>
      </div>
    </div>
  )
}

export default Card