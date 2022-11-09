import { useDispatch } from 'react-redux';
import { MdDelete, MdCallEnd, MdOutlineModeEditOutline } from 'react-icons/md';
import PropTypes from 'prop-types';

import { deleteContactThunk } from 'redux/contacts/thunks.contacts';
import { IconButton } from '@mui/material';
import {
  ButtonsList,
  ContactCard,
  ContactDescription,
  ContactName,
  ContactNumber,
} from './ContactItem.styled';

export default function ContactItem({ name, number, id, onEdit }) {
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContactThunk(e.currentTarget.dataset.id));
  };
  const handleEdit = e => {
    onEdit(e.currentTarget.dataset.id);
  };
  return (
    <ContactCard as="li" elevation={3}>
      <ContactDescription data-id={id} onClick={handleEdit}>
        <ContactName>{name}: </ContactName>
        <ContactNumber>{number}</ContactNumber>
      </ContactDescription>

      <ButtonsList>
        <li>
          <IconButton aria-label="call" color="success" href={`tel: ${number}`}>
            <MdCallEnd />
          </IconButton>
        </li>
        <li>
          <IconButton aria-label="edit" data-id={id} onClick={handleEdit}>
            <MdOutlineModeEditOutline />
          </IconButton>
        </li>
        <li>
          <IconButton
            aria-label="delete"
            color="error"
            data-id={id}
            onClick={handleDelete}
          >
            <MdDelete />
          </IconButton>
        </li>
      </ButtonsList>
    </ContactCard>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onEdit: PropTypes.func,
};
