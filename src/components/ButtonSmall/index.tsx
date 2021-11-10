import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface ButtonSmallProps extends RectButtonProperties {
  children?: string;
}

const ButtonSmall: React.FC<ButtonSmallProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <ButtonText> {children} </ButtonText>
  </Container>
);

export default ButtonSmall;
