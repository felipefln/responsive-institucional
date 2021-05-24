type ButtonColorScheme = {
  color: string;
  backgroundColor: string;
};

type Theme = "light" | "dark";

export type ICardProps = {
  name: string;
  imageSrc: string;
  imageLabel: string;
  cardText: string;
  buttonLabel: string;
  buttonColorScheme: ButtonColorScheme;
  buttonState: boolean | Theme;
  buttonDispatch(): void;
  popupText?: string;
};
