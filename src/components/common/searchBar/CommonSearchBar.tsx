import { useState } from 'react'
import styles from './CommonSearchBar.module.scss'
import { useRecoilState } from 'recoil';
import { searchState } from '@/recoil/atoms/searchState';

function CommonSearchBar() {

  const [search, setSearch] = useRecoilState(searchState);

  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  }

  const onSearch = () => {
      if(text === '') {
        // if users search value with empty value in the input tag box, it will search the default value
        setSearch('Korea');
      } else {
        setSearch(text); 
      }
    
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    console.log(event.key);
    if(event.key === 'Enter') {
      if(text === '') {
        // if users search value with empty value in the input tag box, it will search the default value
        setSearch('Korea');
      } else {
        setSearch(text); 
      }
    }
  }

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input type="text" 
                placeholder="Search for images" 
                className={styles.searchBar__search__input} 
                onChange={onChange}
                onKeyDown={handleKeyDown}
                value={text}
        />
        <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
      </div>
    </div>
  )
}

export default CommonSearchBar
