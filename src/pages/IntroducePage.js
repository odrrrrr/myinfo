import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyPortfolio from '../components/MyPortfolio';
import MyProfile from '../components/MyProfile';
import MyPurPose from '../components/MyPurpose';
import MySkills from '../components/MySkills';

const IntroducePageBlock = styled.div``;

const IntroducePage = () => {
  return (
    <IntroducePageBlock>
      <Header />
      <MyPurPose />
      <MyProfile />
      <MySkills />
      <MyPortfolio />
      <Footer />
    </IntroducePageBlock>
  );
};
export default IntroducePage;
