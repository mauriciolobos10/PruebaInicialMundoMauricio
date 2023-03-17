
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const AutocompleteComponent = ({opciones}) => {
  const [value, setValue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  console.log('value22',value.value);
  
  return (
    <Autocomplete
      options={opciones}
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