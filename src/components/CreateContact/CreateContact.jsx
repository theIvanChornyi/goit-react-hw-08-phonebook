import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { LoadingButton } from '@mui/lab';
import { Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';

import { Controller } from 'react-hook-form';
import {
  selectedAddet,
  selectedContacts,
} from 'redux/contacts/selectors.contacts';

export default function CreateContact({
  control,
  handleSubmit,
  onSubmit,
  editContacts,
}) {
  const isAddet = useSelector(selectedAddet);
  const contacts = useSelector(selectedContacts);

  const handleCreateNewContact = data => {
    const isIncludes = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isIncludes) {
      toast.error(`${data.name} is already in contacts`, {
        autoClose: false,
      });
    } else {
      toast.dismiss();
      onSubmit(data);
    }
  };

  return (
    <Paper as="li" elevation={3}>
      <form onSubmit={handleSubmit(handleCreateNewContact)}>
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
                  disabled={editContacts}
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
                  disabled={editContacts}
                  required
                  id="outlined-required"
                  label="Phone Number"
                />
              )}
            />
          </Box>

          <LoadingButton
            sx={{ width: '25%' }}
            type="submit"
            loading={isAddet}
            disabled={isAddet || editContacts}
            variant="outlined"
          >
            Add
          </LoadingButton>
        </Box>
      </form>
    </Paper>
  );
}

CreateContact.propTypes = {
  control: PropTypes.object,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  editContacts: PropTypes.bool,
};
