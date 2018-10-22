import React from "react";
import styles from './style.css'
const NameContainer = (props)=>{
  return <div className={styles.filter_names_container} >{props.name}</div>
}
export {NameContainer}
