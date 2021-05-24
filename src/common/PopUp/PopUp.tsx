import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/useThemeContext";
import CloseIcon from "../../assets/icon-close.svg";

import { Container } from "./PopUp.styles";
import { IPopUpProps } from "../../interface/popup";

function PopUp({ content, close }: IPopUpProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme} className="popup">
      <div className="popup__content">
        <button className="popup__close-icon" onClick={close}>
          <img src={CloseIcon} alt="Close Icon" />
        </button>
        {content}
      </div>
    </Container>
  );
}

export default PopUp;
