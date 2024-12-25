import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Item = styled.li`
  transition: transform 300ms;
  margin: 30px 0;

  border: 1px solid white;
  border-radius: 10px;
  font-size: 1.1rem;
  width: 20%;
  min-width: 150px;
  list-style: none;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const LinkItem = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: black;
  &:hover {
    color: orange;
  }
  &:visited {
    color: purple;
  }
`;

export const Title = styled.h1`
  text-shadow: 4px 6px 7px black;
`;
