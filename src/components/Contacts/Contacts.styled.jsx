import styled from 'styled-components';

export const ContactsContainer = styled.div`
  margin: 1rem;
  width: 500px;
  padding: 20px;
  padding-top: 0px;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const ContactItem = styled.li`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  width: auto;
`;

export const RemoveButton = styled.button`
  float: right;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  color: white;
  background-color: #dc3545;
  border: none;
  margin-left: 10px;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;
