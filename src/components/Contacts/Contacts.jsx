import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactList,
  ContactsContainer,
  RemoveButton,
} from './Contacts.styled';

export class Contacts extends Component {
  render() {
    const { contacts, onRemoveContact } = this.props;

    return (
      <ContactsContainer>
        <h2>Contacts</h2>
        <ContactList>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id}>
              {name}: {number}
              <RemoveButton onClick={() => onRemoveContact(id)}>
                Remove
              </RemoveButton>
            </ContactItem>
          ))}
        </ContactList>
      </ContactsContainer>
    );
  }
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
