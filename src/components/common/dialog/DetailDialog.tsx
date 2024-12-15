import styles from './DetailDialog.module.scss'

function DetailDialog() {
  return (
    <div className={styles.container}>
      <div className={styles.container__dialog}>
        <div className={styles.container__dialog__header}>
            <div className={styles.close}>
                <button className={styles.close__button}>
                    {/* Google icon */}
                </button>
                <img src=""  alt="photographer profile photo" className={styles.close__authorImage} />
                <span className={styles.close__authorName}>Dain</span>
            </div>
            <div className={styles.bookmark}>
                <button className={styles.bookmark__button}>
                    {/* Google icon */}
                    Bookmark
                </button>
                <button className={styles.bookmark__button}>Download</button>
            </div>
        </div>
        <div className={styles.container__dialog__body}>
            <img src="" alt="Image Details" className={styles.image} />
        </div>
        <div className={styles.container__dialog__footer}>
            <div className={styles.infoBox}>
                <div className={styles.infoBox__item}>
                    <span className={styles.infoBox__item__label}>Image size</span>
                    <span className={styles.infoBox__item__value}>
                        Search Details
                    </span>
                </div>
                <div className={styles.infoBox__item}>
                    <span className={styles.infoBox__item__label}>Image size</span>
                    <span className={styles.infoBox__item__value}>
                        Search Details
                    </span>
                </div>
                <div className={styles.infoBox__item}>
                    <span className={styles.infoBox__item__label}>Image size</span>
                    <span className={styles.infoBox__item__value}>
                        Search Details
                    </span>
                </div>
                <div className={styles.infoBox__item}>
                    <span className={styles.infoBox__item__label}>Image size</span>
                    <span className={styles.infoBox__item__value}>
                        Search Details
                    </span>
                </div>
            </div>
        </div>    
        <div className={styles.tagBox}>
            <div className={styles.tagBox__tag}>
                Tag Data
            </div>
        </div>
      </div>
    </div>
  )
}

export default DetailDialog
