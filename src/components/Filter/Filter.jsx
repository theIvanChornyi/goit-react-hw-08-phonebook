import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { Box, TextField } from '@mui/material';

import SectionTitle from 'components/SectionTitle';
import { getFilter } from 'redux/filter/slise.filter';

export default function Filter() {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(getFilter(e.target.value));
  };
  return (
    <Box sx={{ padding: '10px', mb: '25px' }}>
      <SectionTitle title="Filter" />
      <Box sx={{ textAlign: 'center' }}>
        <TextField
          id="standard-basic"
          label="Filter"
          variant="standard"
          onChange={debounce(handleChange, 300)}
        />
      </Box>
    </Box>
  );
}
