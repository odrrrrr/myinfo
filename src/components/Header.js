import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Responsive from './common/Responsive';
import palette from '../lib/styles/palette';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: ${palette.gray[2]};
  z-index: 10;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;

  a:hover {
    color: white;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/">Introduce</Link>
          <a href="#profile">프로필</a>
          <a href="#skills">기술</a>
          <a href="#portfolio">포트폴리오</a>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};
export default Header;
