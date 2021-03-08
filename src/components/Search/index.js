import React from 'react';
import { Input, Div, Select } from './styles';
import SearchIcon from 'pokemon-assets/assets/img/symbols/ui-search.png';

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
        placeholder='Busca en PokeTeamBuilder'
        onFocus={(e) => e.target.placeholder = ''}
        onBlur={(e) => e.target.placeholder = 'Busca en PokeTeamBuilder'}
      />
      <img src={SearchIcon} alt='Search Icon' />
      <Select
        options={options}
        classNamePrefix='search-select'
        defaultValue={{ value: 'all', label: 'All' }}
      />
    </Div>
  );
};
