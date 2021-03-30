import Axios from 'axios';
import actions from './actions';

Axios.defaults.baseURL = 'http://localhost:3030';

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());

  Axios.get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error)));
};

const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());

  Axios.post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  Axios.delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
