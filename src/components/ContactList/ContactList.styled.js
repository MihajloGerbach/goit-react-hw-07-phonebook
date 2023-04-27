import styled from 'styled-components';

export const List = styled.ol`
  padding: 0;
  margin: 20px 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
`;

export const BtnDelete = styled.button`
  margin-right: 140px;
  font-size: 1em;
  padding: 10px;
  border: 2px solid rgb(227 75 75);
  border-radius: 4px;
  width: 132px;
  background-color: rgb(227 75 75);
  cursor: pointer;
  color: #fff;
`;