import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Card = styled.View`
  width: 100%;
  height: 160px;
  border-radius: 8px;
  background: #ffffff;
  padding-left: 24px;
  padding-right: 16px;
  padding-top: 32px;
  margin-top: 8px;
`;

export const Line = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const LineRight = styled.View`
  align-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const LineCenter = styled.View`
  margin-left: 16px;
  align-items: flex-start;
`;

export const TextHeader = styled.Text`
  color: #000000;
  width: 160px;
  font-weight: 700;
  font-size: 16px;
  height: 20px;
  font-style: normal;
  line-height: 20px;
  align-items: flex-end;
`;

export const ArrowStyle = styled(RectButton)`
  width: 24px;
  align-items: flex-end;
  justify-content: flex-end;
  align-items: center;
  margin-left: 8px;
`;

export const LineDescription = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
`;

export const Description = styled.Text`
  color: #7e7e7e;
  font-weight: 400;
  font-size: 12px;
  font-style: normal;
  line-height: 15px;
  margin-left: 4px;
  margin-right: 16px;
`;
