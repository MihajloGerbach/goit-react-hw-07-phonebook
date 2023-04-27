import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
}
`;

export const Label = styled.label`
  height: 115px;
`;

export const InputStyled = styled(Field)`
  width: 100%;
  border: none;
  height: 25px;
  font-size: 20px;
  border-bottom: 2px solid #6376af;
  outline: none;
  padding-left: 10px;
  ::placeholder {
    color: #6376af;
    font-size: 20px;
    font-style: italic;
  }
`;
export const Button = styled.button`
  font-size: 1em;
  padding: 10px;
  border: 2px solid #6376af;
  border-radius: 4px;
  width: 132px;
  background-color: #6376af;
  cursor: pointer;
  color: #fff;
`;

export const Title = styled.h2`
  color: #6376af;
`;

export const Errormsg = styled.div`
  color: red;
`;