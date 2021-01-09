import React from 'react';

import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SideBtnLink
} from './SideBarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/top-rated" activeStyle>
            Top Rated
          </SidebarLink>
          <SidebarLink to="/upcoming" activeStyle>
            Upcoming
          </SidebarLink>
          <SidebarLink to="/now-playing" activeStyle>
            Now Playing
          </SidebarLink>
          <SidebarLink to="/popular" activeStyle>
            Popular
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBtnLink to="/login">Log in</SideBtnLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
