import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')),
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(
      contact =>
        contact.name
          .toLowerCase()
          .includes(filter ? filter.toLowerCase() : '') ||
        contact.number.includes(filter ? filter : '')
    );

    return (
      <section>
        <div>
          <Form onAddContact={this.addContact} />
        </div>
        <div>
          <Filter onFilterChange={this.handleFilterChange} />
          <Contacts
            contacts={filteredContacts}
            onRemoveContact={this.removeContact}
          />
        </div>
      </section>
    );
  }
}
