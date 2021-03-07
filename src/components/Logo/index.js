import React from 'react';
import { PokeLogo, LogoMod, Link } from './styles';
import PokeLogoImg from '../assets/PokeLogo.svg';

export const Logo = (props) => {
  return (
    <Link to='/'>
      <PokeLogo src={PokeLogoImg} alt='Logo Pokemon' />
      <LogoMod>Team Builder</LogoMod>
    </Link>
  );
};
