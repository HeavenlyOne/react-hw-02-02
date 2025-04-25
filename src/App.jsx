import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const CON_LIST = 'contact_list';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedList = localStorage.getItem(CON_LIST);
    const parsedList = JSON.parse(savedList);
    if (parsedList) {
      this.setState(state => ({ ...state, contacts: parsedList }));
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(CON_LIST, JSON.stringify(this.state.contacts));
    }
  }

  addContact = e => {
    const contactObj = {
      name: e.name,
      number: e.number,
      id: nanoid(),
    };
    this.setState(({ contacts }) => ({
      contacts: [contactObj, ...contacts],
    }));
  };

  deleteContact = contId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contId),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    // console.log(`Here is filter: ${normalizedFilter}!`);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilter} value={filter} />
        <ContactList
          filtered={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
