import React from 'react';
import Description from './styles';

interface Text {
  description?: string;
}

const TextDescription: React.FC<Text> = ({ description }) => (
  <>
    <Description>{description}</Description>
  </>
);

export default TextDescription;
