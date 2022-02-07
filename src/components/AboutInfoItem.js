import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  position: relative;
  .title {
    font-size: 2.2rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 22rem;
  }
  .item {
    background-color: var(--deep-dark);
    border-radius: 8px;
    padding: 1rem;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      left: 16rem;
    }
    .item {
      position: initial;
      gap: 1rem;
      padding: 0.8rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;
export default function AboutInfoItem({
  title = 'This is title',
  items = ['Html', 'Css', 'JS'],
}) {
  return (
    <AboutItemStyle>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyle>
  );
}
