import React from 'react';
import styled from 'styled-components';
import MyProfileLeftPart from './common/MyProfileLeftPart';
import MyProfileRightPart from './common/MyProfileRightPart';
import Responsive from './common/Responsive';
import HTMLImage from '../images/HTML.jpg';
import CSSImage from '../images/CSS.jpg';
import JSImage from '../images/JS.jpg';
import SassImage from '../images/Sass.jpg';
import ReactImage from '../images/React.jpg';
import ReduxImage from '../images/Redux.jpg';
import ReduxSagaImage from '../images/ReduxSaga.jpg';
import NodeImage from '../images/Node.jpg';
import { GiBookshelf } from 'react-icons/gi';
import Fade from 'react-reveal/Fade';

const MySkillsBlock = styled(Responsive)`
  display: flex;
  width: 70%;
  margin: 0 auto;
  padding-top: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .spaceBetween {
    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      margin: 3rem;

      &:hover {
        transform: translateY(-10px);
      }
    }
  }
`;

const MySkills = () => {
  return (
    <MySkillsBlock id="skills">
      <MyProfileLeftPart>
        <Fade top>
          <p>
            <GiBookshelf />
            Skills
          </p>
        </Fade>
      </MyProfileLeftPart>
      <MyProfileRightPart skills={true}>
        <Fade bottom>
          <div className="spaceBetween">
            <img src={HTMLImage} alt="none" />

            <img src={CSSImage} alt="none" />

            <img src={JSImage} alt="none" />

            <img src={SassImage} alt="none" />
          </div>
          <div className="spaceBetween">
            <img src={ReactImage} alt="none" />

            <img src={ReduxImage} alt="none" />

            <img src={ReduxSagaImage} alt="none" />

            <img src={NodeImage} alt="none" />
          </div>
        </Fade>
      </MyProfileRightPart>
    </MySkillsBlock>
  );
};
export default MySkills;
