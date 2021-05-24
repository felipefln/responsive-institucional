import React from 'react';

export type IThemeProps = {
  children: React.ReactNode;
};

type Theme = 'light' | 'dark';

export type IContextProps = {
  theme: Theme;
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
};
