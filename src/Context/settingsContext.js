import React, { useEffect, useState } from 'react';

import { v4 as uuid } from 'uuid';

export const SettingsContext = React.createContext()

const SettingsProvider = ({ children }) => {

  const [defaultValues] = useState({ difficulty: 4 });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);


  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);



  return (
    <SettingsContext.Provider
      value={{defaultValues, list, setList, incomplete, setIncomplete, addItem, deleteItem, toggleComplete}}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider