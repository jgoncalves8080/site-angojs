import React, { useState, useEffect } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  // NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavItemBtn,
  NavBtnLink,
  ImageLogo,
} from './styles';
import { Button } from '../../styles/globalStyle';
import logo from '../../images/logo.png';

const arrayMenu = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Eventos',
    path: '/eventos',
  },
  {
    title: 'Artigos',
    path: '/artigos',
  },
];

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
    console.log('click=>', click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <ImageLogo src={logo} alt="" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              {arrayMenu.map((item, index) => (
                <NavItem key={index}>
                  <NavLink to={item.path}>{item.title}</NavLink>
                </NavItem>
              ))}
              <NavItemBtn>
                {button ? (
                  <NavBtnLink
                    href={
                      'https://gmail.us7.list-manage.com/subscribe?u=15c8a2eac045ad27e371caba3&id=d72a2d8a6a'
                    }
                  >
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink
                    href={
                      'https://gmail.us7.list-manage.com/subscribe?u=15c8a2eac045ad27e371caba3&id=d72a2d8a6a'
                    }
                  >
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
