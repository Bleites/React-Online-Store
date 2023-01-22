import React, { useState } from "react";

import styles from './CountButton.module.css'

function CountButton () {

    let [count, setCount] = useState(0);

    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }

    return (
        
        <div className={styles.button_container}>
        <button className={styles.btn} onClick={incrementCount}>+</button>
                       <span className={styles.btn_count}>{count}</span> 
        <button className={styles.btn} onClick={decrementCount}>-</button>
        </div>
        
    )
}

export default CountButton 