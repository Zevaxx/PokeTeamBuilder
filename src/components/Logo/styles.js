import styled from 'styled-components';
import LogoFrame from '../../assets/LogoFrame.svg';
import { Link as LinkRouter } from 'react-router-dom';

export const Link = styled(LinkRouter)`
  text-decoration: none;
  display:flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

export const PokeLogo = styled.img`
  margin: -60px 0;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const LogoMod = styled.span`
  background-image: url("${LogoFrame}"), radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 80%);
  background-size: cover;
  width: 250px;
  height: 170px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left: -180px;
  transform: rotate(7deg);
  font-size: 1.8rem;
  font-weight: 800;
  white-space:nowrap;
  color: #000;
  @media (max-width: 768px) {
    width: 150px;
    height:100px;
    margin-left: -128px;
    font-size: 1.2rem;
  }
`;
