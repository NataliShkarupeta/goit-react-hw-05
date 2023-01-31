import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: red;
    text-decoration: underline;
  }
`;

export const Nav =styled.nav`
display: flex;
gap:20px;
padding: 20px;
font-size: 25px;
`

export const Div = styled.nav`
  margin-right: 30px;
  width: 100%;
  height: 80px;
  border-bottom: 1px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;