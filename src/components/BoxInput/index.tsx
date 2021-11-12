import React from 'react';
import { TextInputProps, Image } from 'react-native';
import * as S from './styles';
import { AccountCircle } from '~/assets/index';

interface Text extends TextInputProps {
  placeholder?: string;
  imageName?: string;
}

const BoxInput: React.FC<Text> = ({ ...rest }) => (
  <S.Box>
    <Image source={AccountCircle} />
    <S.InputName {...rest} />
  </S.Box>
);

export default BoxInput;
