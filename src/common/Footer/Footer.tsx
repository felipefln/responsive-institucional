import React, { useContext } from 'react';
import { ThemeContext } from "../../hooks/useThemeContext";

import { LogoRaia, LogoDrogasil, LogoFarmasil, Logo4Bio, LogoUniver } from '../../assets';

import { Container } from './Footer.styles';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme} className="footer">
      <div className="footer__paragraph-container">
        <p>RD 2017. Todos os direitos reservados</p>
      </div>
      <div className="footer__logos-container">
        <img src={LogoRaia} alt="Droga Raia Logo" />
        <img src={LogoDrogasil} alt="Drogasil Logo" />
        <img src={LogoFarmasil} alt="Farmasil Logo" />
        <img src={LogoUniver} alt="Univers Logo" />
        <img src={Logo4Bio} alt="4Bio Logo" />
      </div>
      <div className="footer__main-logo-container">
        <img src={LogoRaia} alt="Raia Drogasil Logo" />
      </div>
    </Container>
  );
}

export default Footer;