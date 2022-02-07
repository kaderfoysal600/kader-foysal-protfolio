import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyle = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    min-height: 400px;
    position: relative;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 350px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map-card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
`;
export default function Map() {
  return (
    <MapStyle>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Rampura, Dhaka Bangladesh</PText>
          <a
            href="https://goo.gl/maps/dpjtp15XRyhdoGge6"
            target="__blank"
            rel="noreffer"
            className="map-card__link"
          >
            Open in google map
          </a>
        </div>
      </div>
    </MapStyle>
  );
}
