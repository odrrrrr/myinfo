import React from 'react';
import styled from 'styled-components';
import myProfileImage from '../images/MyProfileImage.jpg';
import Responsive from './common/Responsive';

const MyProfileBlock = styled(Responsive)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url(${myProfileImage}) 50% no-repeat;
  background-size: cover;
  hr {
    width: 5rem;
    border: none;
    border-top: 0.3rem solid white;
  }
`;

const Info1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  color: white;
  font-weight: 900;
  font-size: 3rem;
  .moreInfo {
    font-size: 2rem;
  }
`;
const MyPurPose = () => {
  return (
    <MyProfileBlock>
      <Info1>
        <h4>리액트 포트폴리오</h4>
      </Info1>
      <hr />
      <Info1>
        <p className="moreInfo">안녕하세요 안녕하세요 안녕하세요</p>
      </Info1>
    </MyProfileBlock>
  );
};
export default MyPurPose;
