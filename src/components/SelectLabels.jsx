import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const style = {
    color: "white",
    border: "1px solid white"
}


export default function SelectLabels() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 120}} >
        <FormHelperText style={{color: "white"}}>Select subject</FormHelperText>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            style={style}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="biology">Biology</MenuItem>
            <MenuItem value="chemistry">Chemistry</MenuItem>
            <MenuItem value="maths">Maths</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }