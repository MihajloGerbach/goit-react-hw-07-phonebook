import React from 'react';
import { filterContact } from '../../redux/filterSlice';
import { useDispatch } from 'react-redux';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(filterContact(value));
  };
  return (
    <div>
      <Label>
        <h3>Find contacts by name</h3>
        <Input
          onChange={handleFilter}
          placeholder="find contact"
          type="text"
          name="filter"
        />
      </Label>
    </div>
  );
};