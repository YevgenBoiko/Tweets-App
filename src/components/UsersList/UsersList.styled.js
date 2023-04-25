import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px 40px;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
`;

export const BackBtn = styled(Link)`
  text-decoration: none;
  text-transform: none;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 36px;
  box-sizing: border-box;

  padding: 7px 28px;
  margin: 0;

  color: black;
  :hover {
    background-color: #5cd3a8;
  }
`;

export const Selector = styled(Dropdown)``;

export const List = styled.ul`
  display: flex;
  justify-content: center;

  gap: 20px;
  flex-wrap: wrap;

  padding: 0;
`;

export const Button = styled.button`
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;

  padding: 7px 28px;
  margin: 0;

  :hover {
    background-color: #5cd3a8;
  }
`;
