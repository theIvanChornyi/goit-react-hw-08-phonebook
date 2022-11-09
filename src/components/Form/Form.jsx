import PropTypes from 'prop-types';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';

export default function Form({ handleSubmit, onSubmit, children }) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          m: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '450px',
          gap: '25px',
        }}
      >
        {children}

        <LoadingButton
          sx={{ m: '10px 0', p: '10px' }}
          type="submit"
          variant="outlined"
        >
          Log In
        </LoadingButton>
      </Box>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};
