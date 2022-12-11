import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const style = {
    color: "white",
    border: "1px solid white"
}


export default function SelectLabels({selectData, handleChange}) {
    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 120}} >
        <FormHelperText style={{color: "white"}}>Subject</FormHelperText>
          <Select
            value={selectData}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            style={style}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="biology">biology</MenuItem>
            <MenuItem value="chemistry">chemistry</MenuItem>
            <MenuItem value="maths">maths</MenuItem>
            <MenuItem value="custom">custom</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }