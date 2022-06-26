import React from "react";
import isLoading from '../../Images/preloader.gif';
import styles from './Preloader.module.css';



const Preloader = () => {
    return (<div><img src={isLoading} className={styles.loader} alt='loader' /> </div>)
}

export default Preloader;