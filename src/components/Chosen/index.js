import React from 'react';
import { Div, Img } from './styles';
import PikachuLibre from 'pokemon-assets/assets/img/pokemon/pikachu-libre.png';

export const Chosen = () => {
  return (
    <>
      <Div>
        <Img src={PikachuLibre} alt='' />
      </Div>
    </>
  );
};
