import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { Item, List, BtnDelete } from './ContactList.styled';

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const findNameByFilter = () => {
    const findName = items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return findName;
  };

  const dispatch = useDispatch();

  const deleteContactById = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {isLoading && !error && (
        <ThreeDots
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: 'center' }}
          visible={true}
        />
      )}
      {error && <b>{error}</b>}
      {findNameByFilter().map(({ id, name, phone }) => (
        <Item key={id}>
          <div>
            <p>{name}</p>
            <p>{phone}</p>
          </div>
          <BtnDelete onClick={() => deleteContactById(id)}>Delete</BtnDelete>
        </Item>
      ))}
    </List>
  );
};