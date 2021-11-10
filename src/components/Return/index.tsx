import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, ReturnProps } from './styles';

const Return: React.FC = ({ children }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <ReturnProps onPress={() => navigation.goBack()}>{children}</ReturnProps>
    </Container>
  );
};
export default Return;
