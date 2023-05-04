import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
    const filterChange = e => {
      dispatch(addFilter(e.currentTarget.value));
  };

  return (
    <TextField
      autoComplete='off'
      label="Find contacts by name"
      variant="outlined"
      type="text"
      value={filter}
      onChange={filterChange}
      sx={{
        mt: 2,
        ml: 5,
        width: 300,
      }}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
