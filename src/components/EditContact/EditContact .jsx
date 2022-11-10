import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';

import { LoadingButton } from '@mui/lab';
import { Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import { schemaContact } from 'helpers/yup/validation.schema';

import { updateContactThunk } from 'redux/contacts/thunks.contacts';
import { selectedContacts } from 'redux/contacts/selectors.contacts';

export default function EditContact({ onEdit, id, name, number }) {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaContact),
    defaultValues: {
      name,
      number,
    },
  });
  const handleAbortEdit = () => {
    onEdit(false);
  };
  const contacts = useSelector(selectedContacts);

  const handleEditContact = data => {
    const isIncludes = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isIncludes) {
      toast.error(`${data.name} is already in contacts`, {
        autoClose: false,
      });
    } else {
      toast.dismiss();
      dispatch(updateContactThunk({ id, data }));
      onEdit(false);
    }
  };

  const errorMesage = errors.name?.message || errors.number?.message;
  toast.warn(errorMesage);
  return (
    <Paper as="li" elevation={3}>
      <form onSubmit={handleSubmit(handleEditContact)}>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box sx={{ width: '75%' }}>
            <Controller
              control={control}
              type="text"
              name="name"
              render={({ field }) => (
                <TextField
                  sx={{ width: '50%' }}
                  {...field}
                  required
                  id="outlined-required"
                  label="Name"
                />
              )}
            />
            <Controller
              control={control}
              type="tel"
              name="number"
              render={({ field }) => (
                <TextField
                  sx={{ width: '50%' }}
                  {...field}
                  required
                  id="outlined-required"
                  label="Phone Number"
                />
              )}
            />
          </Box>
          <LoadingButton sx={{ width: '25%' }} type="submit" variant="outlined">
            Edit
          </LoadingButton>
          <LoadingButton
            sx={{ width: '25%' }}
            type="button"
            variant="outlined"
            color="error"
            onClick={handleAbortEdit}
          >
            Back
          </LoadingButton>
        </Box>
      </form>
    </Paper>
  );
}

EditContact.propTypes = {
  onEdit: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
