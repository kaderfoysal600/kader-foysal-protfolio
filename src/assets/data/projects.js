import { v4 as uuidv4 } from 'uuid';
import SpaceShareImg from '../images/space-share.png';
import CurdImg from '../images/curd.png';
import GuessingGame from '../images/guessing-game.png';
import PortfolioImg from '../images/portfolio.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Portfolio Website',
    desc:
      'A portfolio for Kader Foysal. A Frontend developer from Dhaka Bangladesh. The portfolio is made using ReactJs.',
    img: PortfolioImg,
    link: 'https://kaderfoysal.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Space Share',
    desc:
      'An application to find nearby space for leaving , coworking or office. I developed the website',
    img: SpaceShareImg,
    link: 'https://space-share-f35ec.web.app/',
  },
  {
    id: uuidv4(),
    name: 'Javascript Curd',
    desc:
      'An app to made with pure javascript.Which contains create read delete and update functionality',
    img: CurdImg,
    link: 'https://kaderfoysal600.github.io/javascript-curd/',
  },
  {
    id: uuidv4(),
    name: '"Guess the number" - Game',
    desc:
      'This project is made with pure javascript. Which contains create read delete and update functionality ',
    img: GuessingGame,
    link: 'https://kaderfoysal600.github.io/random-project/',
  },
];

export default projects;
