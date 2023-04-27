import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  FormStyled,
  InputStyled,
  Button,
  Title,
  Label,
  Errormsg,
} from './ContactForm.styled';

let userSchema = object({
  name: string().required(),
  phone: string().required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);

  const handleSubmit = (value, actions) => {
    const findContactName = items.find(
      ({ name }) => name.toLowerCase() === value.name.toLowerCase()
    );
    if (findContactName) {
      actions.resetForm();
      return toast.error(`${findContactName.name} already in your contacts!`, {
        position: 'top-center',
        autoClose: 2000,
        theme: 'colored',
      });
    }
    dispatch(addContact(value));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label>
          <Title>Name</Title>
          <InputStyled placeholder="Name" type="text" name="name" />
          <ErrorMessage name="name">
            {msg => <Errormsg>{msg}</Errormsg>}
          </ErrorMessage>
        </Label>
        <Label>
          <Title>Number</Title>
          <InputStyled placeholder="Number" type="tel" name="phone" />
          <ErrorMessage name="phone">
            {msg => <Errormsg>{msg}</Errormsg>}
          </ErrorMessage>
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};