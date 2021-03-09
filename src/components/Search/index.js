import React from 'react';
import { Input, Div, Select } from './styles';

export const Search = () => {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'pokemon', label: 'Pokémon' },
    { value: 'type', label: 'Type' }
  ];

  return (
    <Div>
      <Input
        type='text'
        placeholder='Search in PokeTeamBuilder'
        onFocus={(e) => e.target.placeholder = ''}
        onBlur={(e) => e.target.placeholder = 'Search in PokeTeamBuilder'}
      />
      <Select
        options={options}
        classNamePrefix='search-select'
        defaultValue={{ value: 'all', label: 'All' }}
      />
    </Div>
  );
};
