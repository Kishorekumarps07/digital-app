import React, { useState } from 'react';
import './Sidebar.css';
import {  BiSolidShoppingBagAlt, BiSolidContact } from 'react-icons/bi';
import { FaUserAlt, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { RiLogoutBoxFill} from 'react-icons/ri'

export const Sidebar = ({ children, drawerPos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  

  const menuItem = [
      {
          path: '/',
          name: 'Products',
          icon: <BiSolidShoppingBagAlt />,
        },
        {
            path: '/contactus',
            name: 'Contact us',
            icon: <BiSolidContact />,
        },
        {
            path: '/about',
            name: 'About',
            icon: <FaUserAlt />,
        },
        {
          path: '/',
          name: 'Logout',
          icon: <RiLogoutBoxFill/>,
        }
    ];

  return (
    <div className="container-sidebar">
      <div style={{ width: isOpen ? '200px' : '50px' }} className={`sidebar ${drawerPos}`}>
        <div className="top_section">
          <div style={{ marginLeft: isOpen ? '30px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active-side">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
