import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import './NavbarCss.css';


const Navbar = ({ onNavigate }) => {
  const [isOpen, setOpen] = useState(false);

  const handleNav = (page) => {
    onNavigate(page);
    setOpen(false); // close menu after click
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar_main">
        <div className="navbar_style">
          <h1 className="rooted_title">rooted</h1>
          <Hamburger color="black" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && <div className="menu_overlay" onClick={() => setOpen(false)} />}

      {/* SLIDE-IN MODAL MENU */}
      <div className={`menu_modal ${isOpen ? 'menu_open' : ''}`}>
        <ul className="menu_list">
          <li>
            <div className="menu_link" onClick={() => handleNav('home')}>
              Home
            </div>
          </li>
          <li>
            <div className="menu_link" onClick={() => handleNav('products')}>
              Products
            </div>
            <div className="menu_link" onClick={() => handleNav('products')}>
              Products
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
