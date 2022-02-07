import React from 'react';
import { MdCode, MdDesktopWindows, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ServicesSectionItem from '../components/ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem auto;
  .services__allItem {
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    gap: 10rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItem {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 2rem;
      gap: 5rem;
    }
  }
`;
export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="what I will do for you" />
        <div className="services__allItem">
          <ServicesSectionItem
            icon={<MdDesktopWindows />}
            title="Web Design"
            description="I do UI UX Design to help developers to make amazing website"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            description="I do Frontend Development with React-JS and make Amazing web experience"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Development"
            description="I do App Development with React-Native and make Amazing Application experience"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
