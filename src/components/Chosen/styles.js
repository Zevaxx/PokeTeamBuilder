import styled from 'styled-components';
import PokeTerrain from '../../assets/PokeTerrain.png';

export const Div = styled.div`
  background-image: url(${PokeTerrain});
  background-size: contain;
  background-repeat:no-repeat;
  background-position: center bottom ;
  width: 160px;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 220px;
`;
