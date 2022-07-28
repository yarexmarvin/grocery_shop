import searchIcon from 'assets/icons/search.svg';
import useHide from 'hooks/useHide';
import { useState } from 'react';
import styles from './Search.module.scss';

const Search = () => {

    const [value, setValue] = useState('');
    const [showSuggestions, setShowSuggestions]=useState(false);

    const values = ['car', 'cat', 'cartoon'];

    const domRef = useHide(()=>{
        setShowSuggestions(false);
    })

    const foundedValues = values.filter(word => word.includes(value) && !!value);
    console.log(foundedValues)

    return <div className={styles.wrapper}>
        <div onClick={()=>setShowSuggestions(true)} ref={domRef} className={`${styles.container} ${!!foundedValues.length? styles.active: ''}`}>

            <div className={styles.input}>
                <input onChange={(e) => setValue(e.target.value)} placeholder='Найти товар' />
                <i className='icon-search' />
            </div>
            {!!foundedValues.length && showSuggestions && <div className={styles.suggestions}>
                {foundedValues.map(word => <p>{word}</p>)}
            </div>}

        </div>
    </div>
}

export default Search;