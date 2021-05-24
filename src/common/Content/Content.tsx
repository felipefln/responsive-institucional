import React from 'react';
import { IContentProps } from '../../interface/content';

import { Container } from './Content.styles';

function Content({ children }: IContentProps) {
  return <Container>{children}</Container>;
}

export default Content;