import React, { useState, useContext, useEffect } from "react";
import Card from "../common/Card/Card";
import { ThemeContext } from "../hooks/useThemeContext";
import {DesktopImage, TabletImage, MobileImage} from "../assets";

import { orange, purple, white, yellow } from "../styles/colors";


function ContainerCard() {
  const [desktopCardState, setDesktopCardState] = useState<boolean>(false);
  const [tabletCardState, setTabletCardState] = useState<boolean>(false);
  const [mobileCardState, setMobileCardState] = useState<boolean>(false);
  const { theme, setTheme } = useContext(ThemeContext);

  function handleDesktopCard(): void {
    setDesktopCardState(!desktopCardState);
  }

  function handleTabletCard(): void {
    setTabletCardState(!tabletCardState);
  }

  function handleMobileCard(): void {
    if (setTheme) {
      setTheme(mobileCardState ? "dark" : "light");
      setMobileCardState(!mobileCardState);
    }
  }

  useEffect(() => {
    setTheme && setTheme(mobileCardState ? "dark" : "light");
  }, [theme, setTheme, mobileCardState]);

  const cards = [
    {
      name: "desktop",
      imageSrc: DesktopImage,
      imageLabel: "Site Responsivo DESKTOP",
      cardText: "Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper at enim eget suscipit. Sed congue nisi ac purus placerat maximus sit amet molestie neque. Suspendisse imperdiet velit sit amet erat vestibulum varius. Pellentesque rhoncus pretium neque, volutpat molestie nibh hendrerit sit amet. Vestibulum id justo a enim maximus fermentum eget nec libero. Morbi tempus, lacus in molestie posuere, justo metus accumsan sapien, vitae tincidunt purus neque quis dolor. Sed hendrerit arcu a diam porttitor sagittis. Sed faucibus ligula in lorem aliquet, at condimentum est gravida. Nullam tempor lacinia metus, id mattis lectus posuere ut. Vivamus vel nisi nec leo fermentum mollis. In fringilla eget mauris ut porttitor.",
      buttonLabel: "Leia mais...",
      buttonColorScheme: {
        color: white,
        backgroundColor: orange,
      },
      buttonState: desktopCardState,
      buttonDispatch: handleDesktopCard,
    },
    {
      name: "tablet",
      imageSrc: TabletImage,
      imageLabel: "Site Responsivo TABLET",
      cardText: `Quando pressionado o botão Leia mais.. informação deverá aparecer completa em um popup na tela.`,
      buttonLabel: "Leia mais...",
      buttonColorScheme: {
        color: white,
        backgroundColor: yellow,
      },
      buttonState: tabletCardState,
      buttonDispatch: handleTabletCard,
      popupText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare tellus magna, et congue purus malesuada at. Suspendisse mattis ipsum id eros elementum facilisis. Aliquam non convallis magna. Aliquam ultrices purus sit amet eleifend facilisis. Aliquam tempus lectus ut sapien ullamcorper, quis vestibulum nisl elementum. In purus est, eleifend in sodales ut, dapibus et felis. Phasellus posuere et nisi sit amet consectetur. Donec a nibh id sapien pulvinar varius id quis massa. Mauris sagittis id leo in ultrices. Phasellus nec viverra purus.`,
    },
    {
      name: "mobile",
      imageSrc: MobileImage,
      imageLabel: "Site Responsivo MOBILE",
      cardText: `Quando pressionado o botão alterar tema... modifique o tema do site para black friday a seu gosto.`,
      buttonLabel: 'Alterar tema...',
      buttonColorScheme: {
        color: white,
        backgroundColor: purple,
      },
      buttonState: mobileCardState,
      buttonDispatch: handleMobileCard,
    },
  ];

  const mapDispatchToCards = cards.map((card) => {
    return (
      <Card
        key={Math.random()}
        name={card.name}
        imageSrc={card.imageSrc}
        imageLabel={card.imageLabel}
        cardText={card.cardText}
        buttonLabel={card.buttonLabel}
        buttonColorScheme={card.buttonColorScheme}
        buttonState={card.buttonState}
        buttonDispatch={card.buttonDispatch}
        popupText={card.popupText}
      />
    );
  });

  return <React.Fragment>{mapDispatchToCards}</React.Fragment>;
}

export default ContainerCard;
