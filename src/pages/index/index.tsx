import styles from "./styles/index.module.scss"
import CommonHeader from "@/components/common/header/CommonHeader"
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar"
import CommonNav from "@/components/common/navigation/CommonNav"
import CommonFooter from "@/components/common/footer/CommonFooter"
import Card from "./components/Card"
import { CardDTO } from "./types/card"
import { useMemo, useState } from "react"
import { useRecoilValueLoadable } from "recoil"
import { imageData } from "@/recoil/selectors/imageSelectors"
import DetailDialog from "@/components/common/dialog/DetailDialog"
import Loading from "./components/Loading"

function index() {

    //const imgSelector = useRecoilValue(imageData);
    const imgSelector = useRecoilValueLoadable(imageData);
    const [imgData, setImgData] = useState<CardDTO>();
    const [open, setOpen] = useState<boolean>(false); // image details dialog
    
    const CARD_LIST = useMemo(() => {
        // imgSelector.state = hasValue or loading
        if(imgSelector.state === 'hasValue') {
            console.log(imgSelector)
            const result = imgSelector.contents.results.map((card: CardDTO) => {
                return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData}/> 
            })

            return result
        } else {
            return <Loading/>
        }
    }, [imgSelector])

  return (
    <div className={styles.page}>
        {/* Common Header UI */}
        <CommonHeader/>
        {/* Common Nav UI */}
        <CommonNav/>
        <div className={styles.page__contents}>
            <div className={styles.page__contents__introBox}>
                <div className={styles.wrapper}>
                    <span className={styles.wrapper__title}>PhotoSplash</span>
                    <span className={styles.wrapper__desc}>
                        Internet visual materials
                    </span>
                    {/* SearchBox UI */}
                    <CommonSearchBar/>
                </div>
            </div>
            <div className={styles.page__contents__imageBox}>
               {CARD_LIST}
            </div>
        </div>
        {/* Common Footer UI */}
        <CommonFooter />
            {open && <DetailDialog data={imgData} handleDialog={setOpen}/>}
    </div>
  )
}

export default index
