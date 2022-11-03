/**
 * This function takes in a callback function and default values, and returns an object with a
 * handleChange function, a handleSubmit function, and a values object
 * @param callback - the function that will be called when the form is submitted.
 * @param [defaultValues] - an object with the default values for the form
 */
import { useState, useEffect } from 'react';

const useForm = (callback, defaultValues={}) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    callback({...values});
  };

  const handleChange = (event) => {
    let name, value;
    if(typeof(event) === 'object'){
      // event.persist();
      name = event.target.name;
      value = event.target.value;
    } else {
      // console.log('event from slider', event)
      // hard coded for slider functionality, change "difficulty " language if desired, change it dynamically if doinf stretch goal
      name = 'difficulty';
      value = event;
    }
     
    if (parseInt(value)) {
      value = parseInt(value);
    }

    setValues(values => ({ ...values, [name]: value }));
  };

  useEffect( () => {
    setValues( defaultValues );
  }, [defaultValues]);

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
