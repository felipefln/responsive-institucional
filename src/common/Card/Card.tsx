import React, { useContext } from 'react';
import Popup from "../PopUp/PopUp";

import { ThemeContext } from "../../hooks/useThemeContext";

import { Container } from "./Card.styles";
import { ICardProps } from '../../interface/card';

function Card({
  name,
  imageSrc,
  imageLabel,
  cardText,
  buttonLabel,
  buttonColorScheme,
  buttonState,
  buttonDispatch,
  popupText,
}: ICardProps) {
  const { theme } = useContext(ThemeContext);
  const renderPopup = name === "tablet" && buttonState;
  const content = popupText ? popupText : "";

  return (
    <React.Fragment>
      {renderPopup ? <Popup content={content} close={buttonDispatch} /> : null}
      <Container
        theme={theme}
        name={name}
        className="card"
        color={buttonColorScheme.color}
        backgroundColor={buttonColorScheme.backgroundColor}
        overflowScroll={typeof buttonState == 'boolean' ? buttonState : false}
      >
        <div className="card__media">
          <img src={imageSrc} alt="Card" />
          <h3>{imageLabel}</h3>
        </div>
        <div className="card__text">
          <p>{cardText}</p>
        </div>
        <div className="card__button">
          <button onClick={buttonDispatch}>{buttonLabel}</button>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Card;
