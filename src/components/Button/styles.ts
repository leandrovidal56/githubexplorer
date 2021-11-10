import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 40px;
  background: #000000;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
