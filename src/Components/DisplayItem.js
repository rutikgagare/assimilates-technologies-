import React from 'react'
import classes from './DisplayItem.module.css';

const DisplayItem = (props) => {
  return (
    <tr className={classes.item}>
        <td>{props.item.state}</td>
        <td>{props.item.division}</td>
        <td>{props.item.district}</td>
        <td>{props.item.taluka}</td>
        <td>{props.item.village}</td>
    </tr> 
  )
}

export default DisplayItem