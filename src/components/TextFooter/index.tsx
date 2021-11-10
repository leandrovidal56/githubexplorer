import React from 'react';
import Footer from './styles';

interface Text {
  footer?: string;
}

const TextFooter: React.FC<Text> = ({ footer }) => (
  <>
    <Footer>{footer}</Footer>
  </>
);

export default TextFooter;
