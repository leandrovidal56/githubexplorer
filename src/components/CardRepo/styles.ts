import styled from 'styled-components/native';

export const LineDescription = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
`;

export const Container = styled.View`
  width: 100%;
  height: 183px;
  border-radius: 8px;
  background: #ffffff;
  margin-top: 8px;
  padding-left: 19px;
`;

export const HeaderRepo = styled.View`
  flex-direction: row;
  width: 90%;
  margin-top: 26px;
  justify-content: space-between;
`;

export const TextHeaderRepo = styled.Text`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;
export const TextDescriptionRepo = styled.Text`
  width: 90%;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17.5px;
  margin-top: 16px;
`;

export const TagLine = styled.View`
  flex-direction: row;
  align-items: center;
  height: 21px;
  align-content: center;
  margin-top: 8px;
`;

export const Tag = styled.View`
  align-items: center;
  justify-content: center;
  background: #00000014;
  width: 96px;
  height: 21px;
  padding: 3px 14px;
  border-radius: 12px;

  margin-right: 8px;
`;
export const TagText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
`;

export const ArrowStyle = styled.View`
  width: 24px;
  align-items: flex-end;
  justify-content: flex-end;
  align-items: center;
  margin-left: 8px;
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
