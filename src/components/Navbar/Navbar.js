import React from 'react';

import {
  Nav,
  NavLink,
  HamburgerBar,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle>
          <h1>Logo</h1>
        </NavLink>
        <HamburgerBar onClick={toggle} />
        <NavMenu>
          <NavLink to="/top-rated" activeStyle>
            Top Rated
          </NavLink>
          <NavLink to="/upcoming" activeStyle>
            Upcoming
          </NavLink>
          <NavLink to="/now-playing" activeStyle>
            Now Playing
          </NavLink>
          <NavLink to="/popular" activeStyle>
            Popular
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Log in</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
