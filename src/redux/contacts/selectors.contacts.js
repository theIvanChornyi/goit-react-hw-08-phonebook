import { createSelector } from '@reduxjs/toolkit';
import { selectedFilter } from 'redux/filter/selectors.filter';

export const selectedContacts = state => state.contacts.items;
export const selectedAddet = state => state.contacts.addet;

export const selectedFiltredContacts = createSelector(
  [selectedContacts, selectedFilter],
  (contacts, request) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(request.toLowerCase())
    )
);
