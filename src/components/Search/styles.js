import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Input = styled.input`
  width: 350px;
  font-size: 16px;
  height: 2.5rem;
  border: none;
  padding-inline-end: 40px;
  padding-inline-start: 52px;
  box-shadow: 0px -1px 63px -5px rgba(0,0,0,0.75);
  border-radius: 99px;
  padding-top: 3px;
`;

export const Div = styled.div`
  display:flex;
  justify-content: center;
`;

export const Select = styled(ReactSelect)`
  width: 250px;
  margin-left: 25px;
  & .search-select__control {
    height: 2.5rem;
    }
`;
