import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk, getContacts } from 'redux/contacts/thunks.contacts';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import ContactItem from 'components/ContactItem';
import Container from 'components/Container';
import Filter from 'components/Filter/Filter';
import SectionTitle from 'components/SectionTitle';
import CreateContact from 'components/CreateContact';
import EditContact from 'components/EditContact';

import { ContactsList } from './Contacts.styled';
import { selectedFiltredContacts } from 'redux/contacts/selectors.contacts';
import { schemaContact } from 'helpers/yup/validation.schema';

export default function Contacts() {
  const [editContacts, setEditContact] = useState();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaContact),
    defaultValues: {
      name: '',
      number: '',
    },
  });
  const contacts = useSelector(selectedFiltredContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const onSubmit = data => {
    dispatch(addContactThunk(data));
    reset();
  };

  const errorMesage = errors.name?.message || errors.number?.message;
  toast.warn(errorMesage);
  return (
    <Container>
      <Filter />
      <section>
        <SectionTitle title="contacts" />
        <ContactsList>
          <CreateContact
            editContacts={!!editContacts}
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />

          {contacts.map(({ id, name, number }) =>
            editContacts !== id ? (
              <ContactItem
                key={id}
                name={name}
                number={number}
                id={id}
                onEdit={setEditContact}
              />
            ) : (
              <EditContact
                key={id}
                id={id}
                name={name}
                number={number}
                onEdit={setEditContact}
              />
            )
          )}
        </ContactsList>
      </section>
    </Container>
  );
}
