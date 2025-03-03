import { Component } from 'react';

import './App.css';

import Form from './components/Form/Form';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = e => {
    const contactObj = {
      name: e.name,
      id: nanoid(),
    };
    this.setState(({ contacts }) => ({
      contacts: [contactObj, ...contacts],
    }));
  };

  render() {
    return (
      <>
        <Form onSubmit={this.addContact} />
      </>
    );
  }
}

export default App;
