import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    object-fit: cover;
    height: 20vw;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 50vw;
    }
  }
`;
export default function ProjectItem({
  title = 'Project name',
  img = projectImg,
  desc = ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, id?',
  link = 'www.facebook.com',
}) {
  return (
    <ProjectItemStyles>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="projectItem__img"
      >
        <img src={img} alt="project img" />
      </a>

      <div className="projectItem__info">
        <Link to="#">
          <h1 className="projectItem__title">{title}</h1>
        </Link>
        <p className="projectItem__description">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
