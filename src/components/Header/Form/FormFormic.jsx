import { Formik } from "formik";
import React from "react";
import styles from './Form.module.css';


const FormFormic = (props) => {
       return ( <Formik
           initialValues={{ keyWord: '', categories: 'all', sortingBy:'relevance'}}
      
                   onSubmit={(values, { setSubmitting }) => {
                       setTimeout(() => {
                           props.getBooks(values.keyWord, values.categories, values.sortingBy, null);
                           setSubmitting(false);
                       }, 400);
                   }}
               >
{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,}) => (
    <form onSubmit={handleSubmit}>

        <div className={styles.searchInputGroup}>
            <input 
                placeholder='Type key word for search' 
                name="keyWord" 
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.keyWord} />
            <button className={styles.searchLoup}
                type="submit" 
                disabled={isSubmitting}>
                <img className={styles.searchLoupImg}
                    src='https://img2.freepng.ru/20180623/suf/kisspng-computer-icons-magnifying-glass-magnifier-clip-art-zoom-in-5b2e324e088154.4432894615297541900349.jpg'
                    alt='search' />
            </button>
        </div>

        <div className={styles.searchParametersGroup}>
            <label className={styles.searchParameter}> Categories
                <select 
                    name='categories'
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.categories} >
                        <option value='all'>All</option>
                        <option value='art'>Art</option>
                        <option value='biography'>Biography</option>
                        <option value='computers'>Computers</option>
                        <option value='history'>History</option>
                        <option value='medical'>Medical</option>
                        <option value='poetry'>Poetry</option>
                </select>
            </label>

            <label className={styles.searchParameter}> Sorting by
                <select 
                    name='sortingBy'
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.sortingBy}>
                        <option value='relevance'>relevance</option>
                        <option value='newest'>newest</option>
                </select>
            </label>
        </div>
    </form>
)}
</Formik>)
}

export default FormFormic;