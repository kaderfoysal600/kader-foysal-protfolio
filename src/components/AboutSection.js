import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/hero.png';
import AboutInfoItem from './AboutInfoItem';

const AboutPageStyle = styled.div`
  width: 100%;
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
    width: 100%;
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
                I am a highly enthusiastic Frontend developer with 1 years of
                experience. I have strong desire for knowledge and challenges.
                <br />
                <br />I always curious about the latest technology and updates
                in the web development field. I consider that nothing is
                impossible ,there are ways that leads to everything. <br />{' '}
                <br />
                Now I am looking for an opportunity to apply my skills and
                contribute to the growth of the company.
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
    </AboutPageStyle>
  );
}
