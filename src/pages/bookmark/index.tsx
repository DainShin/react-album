import CommonHeader from '@/components/common/header/CommonHeader'
import styles from './styles/index.module.scss'
import { useEffect, useState } from 'react'
import Card from './components/Card';

function index() {
    const [data, setData] = useState([]);
    const getData = () => {
       
    }

    useEffect(() => {
        getData();
    }, []);

  return (
    <div className={styles.page}>
      <CommonHeader />
      <main className={styles.page__contents}>
        <Card />
      </main>
    </div>
  )
}

export default index
