import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

const Return: React.FC = ({ children }) => {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.ReturnProps onPress={() => navigation.goBack()}>
        {children}
      </S.ReturnProps>
    </S.Container>
  );
};
export default Return;
