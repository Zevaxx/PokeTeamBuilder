import React from 'react';
import { Chosen } from '../Chosen';
import { Div } from './styles';

export const ListOfChosen = () => {
  const chosens = [1, 2, 3, 4, 5, 6];

  return (
    <Div>
      {chosens.map((chosen) => <Chosen key={chosen} />)}
    </Div>
  );
};
