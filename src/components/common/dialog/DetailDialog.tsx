import { CardDTO, Tag } from '@/pages/index/types/card'
import styles from './DetailDialog.module.scss'
import React, { useEffect, useState } from 'react'
import toast, {toastConfig} from 'react-simple-toasts'
import { eventNames } from 'process'
// import 'react-simple-toasts/dist/style.css'
// import 'react-simple-toasts/dist/theme/dark.css'


// toastConfig({ theme: 'dark' });

interface Props {
    data: CardDTO
    handleDialog: (eventValue: boolean) => void
}

function DetailDialog({ data, handleDialog }: Props) {

    const [bookmark, setBookmark] = useState(false);

    // close dialog
    const closeDialog = () => {
        handleDialog(false);
        
    }

    // bookmark event
    const addBookmark = (selected: CardDTO) => {
        setBookmark(true);

        // when save the value of localStorage, save as json stringify(save it as a string)
        const getLocalStorage = JSON.parse(localStorage.getItem("bookmark"));

        // 1. if there's no data named bookmark in the localStorage
        if(!getLocalStorage || getLocalStorage === null) {
            localStorage.setItem('bookmark', JSON.stringify([selected]));
            console.log('saved image')
            toast('Saved the image in the bookmark 😊');
        } else {
            // 2. if the image is already saved in the localStorage bookmark
            if(getLocalStorage.findIndex((item: CardDTO) => item.id === selected.id) > -1) {
                toast('The image is already saved ');
            } else {
                // 3. when the image is not saved in the localStorage bookmark + when there's one or more values in the bookmark
                const res = [...getLocalStorage];
                res.push(selected);
                localStorage.setItem('bookmark', JSON.stringify(res));

                toast('Saved the image in the bookmark 😊');
            }
        }
    }

    useEffect(() => {
        const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'));

        if(getLocalStorage && getLocalStorage.findIndex((item:CardDTO) => item.id === data.id) > -1) {
            setBookmark(true);
        } else if (!getLocalStorage) return;

        // esc key -> close the dialog
        const escKeyDownCloseDialog = (event: any) => {
            console.log('escKeyDownCloseDialog');
            if(event.key === 'Escape') closeDialog();
        }

        // event for escKeyDownCloseDialog 
        window.addEventListener('keydown', escKeyDownCloseDialog)
        return () => window.removeEventListener("keydown", escKeyDownCloseDialog)
    }, [])

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
                        <button className={styles.bookmark__button} onClick={() => addBookmark(data)}>
                            {/* Google icon */}
                            { bookmark === false ? 
                            (<span className='material-symbols-outlined' style={{ fontSize: 16 + 'px' }}>
                                favorite
                            </span>) : 
                            (<span className='material-symbols-outlined' style={{ fontSize: 16 + 'px', color: 'red' }}>
                                favorite
                            </span>)}
                            
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
