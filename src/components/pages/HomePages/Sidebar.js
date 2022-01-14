import React from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from "cdbreact";

import { NavLink } from "react-router-dom";
import { Icon } from "../../common/SpinningIcons"

const Sidebar = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Menu
                    </a>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink to="/aboutus" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="columns">About Us</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/howitworks" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="table">How It Works</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/features" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="user">Features</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/privacy" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">Privacy Policy</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/terms" target="_blank" activeclassname="activeClicked">
                            <CDBSidebarMenuItem icon="exclamation-circle">Terms & Conditions</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Sidebar Footer
                    </div>
                    <Icon />
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};
export default Sidebar;
