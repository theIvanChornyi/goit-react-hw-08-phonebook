import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export default function FormInput({ fieldName, type = 'text', control }) {
  return (
    <Controller
      control={control}
      name={fieldName}
      render={({ field }) => (
        <TextField
          required
          {...field}
          id={
            type !== 'password'
              ? 'standard-required'
              : 'standard-password-input'
          }
          type={type}
          label={fieldName}
          variant="standard"
        />
      )}
    />
  );
}

FormInput.propTypes = {
  fieldName: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.object,
};
