/**
 * The SettingsProvider is a function that returns a SettingsContext.Provider component
 */
import React, { useEffect, useState } from 'react';

// import { v4 as uuid } from 'uuid';

export const SettingsContext = React.createContext()

/**
 * We're using the useState hook to create a stateful value called list, which is an array of objects. 
 * 
 * The default value of list is an empty array. 
 * 
 * We're also using the useState hook to create a stateful value called incomplete, which is an array of objects. 
 * 
 * The default value of incomplete is an empty array. 
 * 
 * We're also using the useState hook to create a stateful value called defaultValues, which is an object. 
 * 
 * The default value of defaultValues is an object with a difficulty property set to 4.
 */
const SettingsProvider = ({ children }) => {

  // const [defaultValues] = useState({ difficulty: 4 });
  // const [list, setList] = useState([]);
  // const [incomplete, setIncomplete] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [pageItems, setPageItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  const values = {
    showCompleted,
    pageItems,
    sort,
    setShowCompleted,
    setPageItems,
    setSort,
  }

  /* Returning a SettingsContext.Provider component. */
  return (
    <SettingsContext.Provider value={ values }>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider
/**
 * The function takes an item as an argument, adds an id to the item, sets the item's complete property
 * to false, and then adds the item to the list
 */

// function addItem(item) {
//   item.id = uuid();
//   item.complete = false;
//   console.log(item);
//   setList([...list, item]);
// }

/**
 * It takes an id as an argument, filters the list to remove the item with that id, and then sets the
 * list to the filtered list
 * @param id - The id of the item to be deleted.
 */
// function deleteItem(id) {
//   const items = list.filter(item => item.id !== id);
//   setList(items);
// }

/**
 * If the item's id matches the id passed in, toggle the complete property
 * @param id - the id of the item that was clicked
 */

// function toggleComplete(id) {

//   const items = list.map(item => {
//     if (item.id === id) {
//       item.complete = !item.complete;
//     }
//     return item;
//   });

//   setList(items);

// }

/* Updating the title of the page to reflect the number of incomplete items. */
// useEffect(() => {
//   let incompleteCount = list.filter(item => !item.complete).length;
//   setIncomplete(incompleteCount);
//   document.title = `To Do List: ${incomplete}`;
// }, [list]);


