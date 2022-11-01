import React from 'react';
import { useContext } from 'react';
import { settingsContext } from '../../Context/settingsContext';
import useForm from '../../hooks/form.js';

/**
 * We're using the `useForm` hook to handle the form submission and the `useContext` hook to get the `addItem` function from the `settingsContext` and the `defaultValues` object
 * 
 * @returns A form with a submit button.
 */


const AddForm = ({ children }) => {

  const { defaultValues, addItem } = useContext(settingsContext);
  const { handleChange, handleSubmit } = useForm(addItem.defaultValues);


  return (

    <>


      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>
    </>
  )
}

export default AddForm;