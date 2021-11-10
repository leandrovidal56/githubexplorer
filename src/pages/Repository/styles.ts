import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #e5e5e5;
`;

export const Content = styled.View`
  height: auto;
  flex: 1;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
`;
export const Search = styled.View`
  justify-content: space-between;
  /* align-content: center; */
  align-self: center;
  align-items: center;
  flex-direction: row;
  padding: 0 16px;
  /* width: 90%; */
  margin-top: 8px;
`;
export const SearchBar = styled.View`
  height: 40px;
  background: #ffffff;
  border-radius: 8px;
  width: 84%;
  align-items: center;
  padding: 8px 16px;
  flex-direction: row;
  /* width: 287px; */
`;
export const Filter = styled.View`
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 8px;
  height: 40px;
  background: #ffffff;
  width: 14%;
  /* width: 48px; */
  /* margin-left: 8px; */
  margin-left: 2%;
`;
