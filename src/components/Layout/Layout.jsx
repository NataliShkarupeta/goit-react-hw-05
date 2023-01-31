
import { StyledLink, Nav, Div } from 'default.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


 const Layout = () => {
  return (
    <>
      <Div>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};export default Layout;