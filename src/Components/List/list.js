import React from 'react';
import { useContext } from 'react';
import { SettingsContext, settingsContext } from '../../Context/settingsContext';

// We're mapping over the list array in the SettingsContext and returning a div for each item in the array
//  * @returns A list of items from the list array in the SettingsContext.
//  */

const List = ({ children }) => {

  const { list, toggleComplete } = useContext(SettingsContext);

  return (

    <>

      {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

    </>
  )
}