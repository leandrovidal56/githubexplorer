import React from 'react';
import Header from './styles';

interface Text {
  header?: string;
}

const TextHeader: React.FC<Text> = ({ header }) => (
  <>
    <Header>{header}</Header>
  </>
);

export default TextHeader;
