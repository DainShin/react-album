import CommonHeader from '@/components/common/header/CommonHeader'
import styles from './styles/index.module.scss'
import { useEffect, useState } from 'react'
import Card from './components/Card';
import { CardDTO } from '../index/types/card';

function index() {
    const [data, setData] = useState([]);
    
    const getData = () => {
       const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'));

       if(getLocalStorage || getLocalStorage !== null) setData(getLocalStorage)
       else setData([]);
    }

    useEffect(() => {
        getData();
    }, []);

  return (
    <div className={styles.page}>
      <CommonHeader />
      <main className={styles.page__contents}>
        { data.length === 0 ? 
          (<div className={styles.page__contents__noData}>No Data</div>) : 
          (data.map((item:CardDTO) => {
            return <Card prop={item} key={item.id}/>
          }))
        }
       
      </main>
    </div>
  )
}

export default index
