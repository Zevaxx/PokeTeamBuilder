import React from 'react';
import { Input, Div } from './styles';
import Select from 'react-select';

export const Search = () => {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'pokemon', label: 'Pokémon' },
    { value: 'type', label: 'Type' }
  ];

  return (
    <Div>
      <Input type='text' placeholder='Busca en Poke Team Builder' />
      <Select options={options} />
    </Div>
  );
};
