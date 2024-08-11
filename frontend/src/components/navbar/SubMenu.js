import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: var( --menu);
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none; 
    font-size: 20px;
    border-radius: 7px;
    margin-bottom: 12px;
    margin-left: 10px;

    &:hover {
        background: var( --hoverBg);
        border-left: 4px solid var( --navIcons);
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 10px;
`;

const DropdownLink = styled(Link)`
    border-left: 3px solid var( --navIcons);
    margin-left: 40px;
    height: 60px;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 15px;
    color: var( --navIcons);

    &:hover{
        color: var( --black);
        cursor: pointer;
    }
`;

const SubMenu = ({ item, closeNavbar }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    const handleLinkClick = () => {
        if (item.subNav) {
          showSubnav();
        } else {
            closeNavbar();
        }
    };

    return (
        <>
            <SidebarLink to={item.path} onClick={handleLinkClick}>
                <div className='menu-title'>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null
                    }
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {/* {item.icon} */}
                        <SidebarLabel onClick={closeNavbar}>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default SubMenu;