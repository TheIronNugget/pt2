import './Navbar.css';

import React, {useState} from 'react';

import {RiMenuLine, RiCloseLine} from 'react-icons/ri';

const Menu= () =>(
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wpt2">Goal</a></p>
    <p><a href="#possibility">Genes</a></p>
    <p><a href="#features">Notes</a></p>
    <p><a href="#blog">Library</a></p>
  </>

)

const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);

  return (
    <div className="pt2__navbar">
      <div className="pt2__navbar-links">
        <div className="pt2__navbar-links_logo">
          <h1>MYST</h1>
        </div>
        <div className="pt2__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="pt2__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="pt2__navbar-menu">
        {toggleMenu ? <RiCloseLine color="#00f811" size={27} onClick={() => setToggleMenu(false)} /> : <RiMenuLine color="#00f811" size={27} onClick={() => setToggleMenu(true) } />}
        {toggleMenu && (
          <div className='pt2__navbar-menu_container scale-up-center'>
            <div className="pt2__navbar-menu_container-links">
              <Menu />
              <div className="pt2__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button className="butti" type='button'>Sign Up</button>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;