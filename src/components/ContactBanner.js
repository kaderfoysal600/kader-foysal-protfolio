import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContentBannerStyle = styled.div`
  padding: 10rem 0;
  .contentBanner__wrapper {
    padding: 5rem 0;
    text-align: center;
    background-color: var(--deep-dark);
    border-radius: 12px;
  }
  .contentBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contentBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContentBannerStyle>
      <div className="container">
        <div className="contentBanner__wrapper">
          <PText>Have a content in mind</PText>
          <h3 className="contentBanner__heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContentBannerStyle>
  );
}
