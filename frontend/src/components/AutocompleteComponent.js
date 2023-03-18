
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const AutocompleteComponent = ({opciones, onOptionSelected}) => {
  const [value, setValue] = useState(null);


  const handleChange = (event, newValue) => {
    setValue(newValue);

    
    console.log('hola', newValue.label)
    onOptionSelected(newValue.label);
  };
 

  return (
    <Autocomplete
      options={opciones}
      getOptionLabel={(opciones) => opciones.value}
      value={value}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField {...params} label="Seleccione una opción" variant="outlined" />
      )}
    />
  );
}

export default AutocompleteComponent;