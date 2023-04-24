import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const List = styled.ul`
  align-items: center;
  margin: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 15px;
  height: 50px;
`;

export const NavBtn = styled(NavLink)`
  text-decoration: none;
  color: white;
  text-transform: none;
  line-height: 22px;

  &.active {
    color: #5cd3a8;
  }

  :hover {
    color: #5cd3a8;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 15px;
  right: 40px;
  width: 76px;
  height: 22px;
`;
