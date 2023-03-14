import React from 'react';
import DisplayItem from './DisplayItem';
import classes from './Display.module.css';

const Display = (props) => {

  return (
    <div>
      <table className={classes.display}>

        <tr>
          <th>State</th>
          <th>Division</th>
          <th>District</th>
          <th>Taluka</th>
          <th>Village</th>
        </tr>

        {props.userData.map((item) => {
          return <DisplayItem item={item}></DisplayItem>
        })}

      </table>
    </div>
  )
}

export default Display;