import styled from 'styled-components/native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background: #ffffff;
  flex: 1;
  padding: ${16 + getStatusBarHeight()}px 30px ${16 + getBottomSpace()}px;
  align-items: center;
  justify-content: space-between;
`;

export const Top = styled.View`
  padding-top: 72px;
  height: 80px;
`;
export const Center = styled.View`
  justify-content: center;
  width: 100%;
`;
export const Footer = styled.View`
  justify-content: flex-end;
`;
