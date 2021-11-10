import styled from 'styled-components/native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;
export const Content = styled.View`
  flex: 1;
  padding: ${16 + getStatusBarHeight()}px 30px ${16 + getBottomSpace()}px;
  justify-content: space-between;
  align-items: center;
`;

export const Top = styled.View`
  padding-top: 72px;
  height: 80px;
  width: 100%;
  justify-content: flex-start;
`;
export const Center = styled.View`
  justify-content: center;
  width: 100%;
`;
export const Footer = styled.View`
  justify-content: flex-end;
`;
