import React from 'react';
import { TextInputProps, Image } from 'react-native';
import { Box, InputName } from './styles';
import { AccountCircle } from '~/assets/index';

interface Text extends TextInputProps {
  placeholder?: string;
  imageName?: string;
}

const BoxInput: React.FC<Text> = ({ ...rest }) => (
  <Box>
    <Image source={AccountCircle} />
    <InputName {...rest} />
  </Box>
);

export default BoxInput;
