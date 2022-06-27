import React from "react";
import styles from './Form.module.css';


const Form = () => {
    let formref = React.createRef();
    let onClickSubmit = (ev) => {
        ev.preventDefault();

        
    return (
<form onSubmit={onClickSubmit} ref={formref}>

    <div className={styles.searchInputGroup}>
        <input placeholder='Type key word for search' name="keyWord" ></input >
        <button className={styles.searchLoup}>
            <img className={styles.searchLoupImg}
                src='https://img2.freepng.ru/20180623/suf/kisspng-computer-icons-magnifying-glass-magnifier-clip-art-zoom-in-5b2e324e088154.4432894615297541900349.jpg'
                alt='search'/>
        </button>
 
    </div>

    <div className={styles.searchParametersGroup}>
        <label className={styles.searchParameter}> Categories
            <select name='categories'>
                <option value ='all'>All</option>
                <option value ='art'>Art</option>
                <option value ='biography'>Biography</option>
                <option value ='computers'>Computers</option>
                <option value ='history'>History</option>
                <option value ='medical'>Medical</option>
                <option value ='poetry'>Poetry</option>
            </select>
        </label>

        <label className={styles.searchParameter}>
            Sorting by
            <select name='sortingBy'>
                <option>relevance</option>
                <option>newest</option>
            </select>
        </label>
    </div>
</form>
    )
}
}
export default Form;