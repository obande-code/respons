import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Input from '@material-ui/core/Input';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../assets/ResponsiBid-logo-gold.svg'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <img src={logo} alt="responsibid" />
          <form>
          <Input style={{background:'#4981b4', borderRadius:'5px', border:'none'}}
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                }
          />
          </form>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          </div>
              <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                  <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                      <AiIcons.AiOutlineClose />
                    </Link>
                  </li>
                  {SidebarData.map((item, index) => {
                    return (
                      <li key={index} className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
