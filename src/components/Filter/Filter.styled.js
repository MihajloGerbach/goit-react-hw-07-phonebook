import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  width: 80%;
  height: 25px;
  font-size: 18px;
  border-bottom: 2px solid #6376af;
  outline: none;
  padding-left: 10px;
  ::placeholder {
    color: #6376af;
    font-size: 16px;
    font-style: italic;
  }
`;

export const Label = styled.label`
  display: block;
  width: 80%;
`;