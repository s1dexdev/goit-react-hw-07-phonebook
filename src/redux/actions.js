import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('phoneBook/addContactRequest');
const addContactSuccess = createAction('phoneBook/addContactSuccess');
const addContactError = createAction('phoneBook/addContactError');

const deleteContactRequest = createAction('phoneBook/deleteContactRequest');
const deleteContactSuccess = createAction('phoneBook/deleteContactSuccess');
const deleteContactError = createAction('phoneBook/deleteContactError');

const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');
const fetchContactsSuccess = createAction('phonebook/fetchContactsSuccess');
const fetchContactsError = createAction('phonebook/fetchContactsError');

const changeFilter = createAction('phoneBook/filterContacts');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  changeFilter,
};
