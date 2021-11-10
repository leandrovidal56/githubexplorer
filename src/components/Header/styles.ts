import styled from 'styled-components/native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

const Container = styled.View`
  height: 72px;
  flex-direction: row;
  justify-content: space-between;
  background: #ffffff;
  align-items: center;
  padding: ${36 + getStatusBarHeight()}px 16px ${16 + getBottomSpace()}px;
`;

export default Container;
