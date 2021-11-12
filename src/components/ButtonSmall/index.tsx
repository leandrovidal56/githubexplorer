import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import * as S from './styles';

interface ButtonSmallProps extends RectButtonProperties {
  children?: string;
}

const ButtonSmall: React.FC<ButtonSmallProps> = ({ children, ...rest }) => (
  <S.Container {...rest}>
    <S.ButtonText> {children} </S.ButtonText>
  </S.Container>
);

export default ButtonSmall;
