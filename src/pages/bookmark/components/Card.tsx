import styles from './Card.module.scss'

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card__imageBox}>
        <img className={styles.card__imageBox__image} src="" alt="" />
      </div>
      <div className={styles.card__infoBox}>
        <div className={styles.card__infoBox__row}>
            <span className={styles.label}>Author</span>
            <span className={styles.value}>Value</span>
        </div>
        <div className={styles.card__infoBox__row}>
            <span className={styles.label}>Image Size</span>
            <span className={styles.value}>Value</span>
        </div>
        <div className={styles.card__infoBox__row}>
            <span className={styles.label}>Uploaded Date</span>
            <span className={styles.value}>Value</span>
        </div>
        <div className={styles.card__infoBox__row}>
            <span className={styles.label}>Last Updated</span>
            <span className={styles.value}>Value</span>
        </div>
        <div className={styles.card__infoBox__row}>
            <span className={styles.label}>Download</span>
            <span className={styles.value}>Value</span>
        </div>
      </div>
    </div>
  )
}

export default Card
