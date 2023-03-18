
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const AutocompleteComponent = ({opciones, onOptionSelected}) => {
  const [value, setValue] = useState(null);


  const handleChange = (event, newValue) => {
    setValue(newValue);

    const selectedOptionId = newValue ? newValue.id : null;
    
    console.log('hola', newValue.label)
    onOptionSelected(newValue.label);
    // stackModelos = value.value;
    // stackModelos = opciones?.id || null

    // console.log('value22',value.label)
  //   {value?.length > 0 && (
  // )};
  
  };
 

  return (
    <Autocomplete
      options={opciones}
      getOptionLabel={(opciones) => opciones.value}
      // getOptionLabel={(option) => option.label}
      value={value}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField {...params} label="Select an option" variant="outlined" />
      )}
    />
  );
}

export default AutocompleteComponent;