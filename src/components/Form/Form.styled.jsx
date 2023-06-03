import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  width: 500px;
  border: 1px solid black;
  border-radius: 5%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

export const InputField = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ddd;
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
