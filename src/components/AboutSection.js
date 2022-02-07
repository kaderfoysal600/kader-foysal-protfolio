import React from 'react';
import styled from 'styled-components';
import ContactBanner from './ContactBanner';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from './AboutInfoItem';

const AboutPageStyle = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
  .Left {
    flex: 3;
  }
  .Right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
      left: 0;
    }
  }
  .Right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 15rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .about__info__heading {
      font-size: 3rem;
    }
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
  }
`;
export default function AboutSection() {
  return (
    <AboutPageStyle>
      <div className="container">
        <div className="top-section">
          <div className="Left">
            <p className="about__subheading">
              Hi I am <span>Kader Foysal</span>
            </p>
            <h2 className="about__heading">Frontend Developer </h2>
            <div className="about__info">
              <PText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, voluptates. Lorem ipsum dolor sit amen. adipisicing
                elit. Vel ex blanditiis numquam repellat,
                <br /> <br />
                minima id fugit dolore voluptatibus voluptate non, aperiam
                accusamus possimus esse enim similique, est necessitatibus vitae
                officiis?
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda ipsam eligendi error enim sapiente itaque temporibus
                quisquam obcaecati pariatur commodi? Fuga iste rerum ea neque
                quisquam fugiat ullam laboriosam sit.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="Right">
            <img src={AboutImg} alt="Pic of Kader Foysal" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['National Bank Public School and College']}
            />
            <AboutInfoItem title="College" items={['Dhaka Biggan College']} />
            <AboutInfoItem
              title="University"
              items={['Manarat International University']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">MY SKILLS</h1>
            <AboutInfoItem
              title="Frontend"
              items={['HTML', 'CSS', 'Javascript', 'REACT']}
            />
            <AboutInfoItem title="Design" items={['Photoshop', 'Illustator']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyle>
  );
}
