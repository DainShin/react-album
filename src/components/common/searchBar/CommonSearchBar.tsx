import styles from './CommonSearchBar.module.scss'

function CommonSearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input type="text" placeholder="Search for images" className={styles.searchBar__search__input}/>
        <img src="src/assets/icons/icon-search.svg" alt="" />
      </div>
    </div>
  )
}

export default CommonSearchBar
