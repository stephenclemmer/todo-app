// import React from 'react';
import {Card, Pagination} from '@mantine/core';
import { useContext, useState } from 'react';
import { When } from 'react-if';
import { SettingsContext } from '../../Context/Settings/settingsContext';

// We're mapping over the list array in the SettingsContext and returning a div for each item in the array
//  * @returns A list of items from the list array in the SettingsContext.
//  */

/**
 * We're using the `useContext` hook to get the `pageItems` and `showCompleted` values from the `SettingsContext` provider.
 * We're also using the `useState` hook to set the `page` state to 1. 
 * We're then using the `pageItems` and `showCompleted` values to filter the list and set the `displayList` variable to the list items we want to display
 */
const List = ({ list, toggleComplete }) => {

  const { pageItems, showCompleted } = useContext(SettingsContext);
  const [page, setPage] = useState(1);
  

  // pagination
  const listToRender = showCompleted ? list : list.filter(item => !item.complete)
  const listStart = pageItems * (page - 1);
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(listToRender.lenth / pageItems);
  const displayList = listToRender.slice(listStart, listEnd);


 /* It's returning a list of items from the list array in the SettingsContext. */
  return (

    <>

      {displayList.map(item => (
        <Card key={item.id} withBorder>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        </Card>
      ))}


        <When condition={listToRender.length > 0}>
          <Pagination page={page} onChange={setPage} total={pageCount}/>
        </When>
    </>
  )
}

export default List;