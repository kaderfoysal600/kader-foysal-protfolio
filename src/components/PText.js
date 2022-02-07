import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  line-height: 1.3em;
  font-size: 1.8rem;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
export default function PText({ children }) {
  return <PStyle className="para">{children}</PStyle>;
}
