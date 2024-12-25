import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

const Container = styled.div`
  padding: 40px 70px;
`;

const Header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 20px;
  background: white;
  box-shadow: 0px 2px 5px 0px black;
  margin-bottom: 30px;
`;

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default Layout;
