import { CardDTO, Tag } from '@/pages/index/types/card'
import styles from './DetailDialog.module.scss'

interface Props {
    data: CardDTO
    handleDialog: (eventValue: boolean) => void
}

function DetailDialog({ data, handleDialog }: Props) {

    const closeDialog = () => {
        handleDialog(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__dialog}>
                <div className={styles.container__dialog__header}>
                    <div className={styles.close}>
                        <button className={styles.close__button} onClick={closeDialog}>
                            {/* Google icon */}
                            <span className='material-symbols-outlined' style={{ fontSize: 28 + 'px' }}>close</span>
                        </button>
                        <img src={data.user.profile_image.small} alt="photographer profile photo" className={styles.close__authorImage} />
                        <span className={styles.close__authorName}>{data.user.name}</span>
                    </div>

                    <div className={styles.bookmark}>
                        <button className={styles.bookmark__button}>
                            {/* Google icon */}
                            <span className='material-symbols-outlined' style={{ fontSize: 16 + 'px' }}>
                                favorite
                            </span>
                            Bookmark
                        </button>
                        <button className={styles.bookmark__button}>Download</button>
                    </div>
                </div>
                <div className={styles.container__dialog__body}>
                    <img src={data.urls.small} alt="Image Details" className={styles.image} />
                </div>

                <div className={styles.container__dialog__footer}>
                    <div className={styles.infoBox}>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>Image Size</span>
                            <span className={styles.infoBox__item__value}>
                                {data.width} x {data.height}
                            </span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>Upload</span>
                            <span className={styles.infoBox__item__value}>
                                {data.created_at.split('T')[0]}
                            </span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>Last Update</span>
                            <span className={styles.infoBox__item__value}>
                                {data.updated_at.split('T')[0]}
                            </span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>Download</span>
                            <span className={styles.infoBox__item__value}>
                                {data.likes}
                            </span>
                        </div>
                    </div>

                    <div className={styles.tagBox}>
                        {data && data.tags && data.tags.length > 0 ? (
                            data.tags.map((tag:Tag) => (
                                <div className={styles.tagBox__tag} key={tag.title}>
                                    {tag.title}
                                </div>
                            ))
                        ) : (
                            <div ></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailDialog
