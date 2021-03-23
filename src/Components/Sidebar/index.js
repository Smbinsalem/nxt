import React from "react";
import { Route, Switch } from "react-router-dom";
import UniPage from "../Pages/Uni";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./Sidebar";

const Sidebar = ({ Menu, toggle }) => {
  return (
    <SidebarContainer Menu={Menu} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/universities">Universities</SidebarLink>
        <SidebarLink to="/">Courses</SidebarLink>
        <SidebarLink>Students</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Join Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
