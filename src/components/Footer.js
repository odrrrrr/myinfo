import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import Responsive from './common/Responsive';
import { AiFillGithub } from 'react-icons/ai';

const FooterBlock = styled(Responsive)`
  width: 100%;
  height: 200px;
  background: #282828;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <div>
        <a
          href="https://github.com/odrrrrr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size="50" color="white" />
        </a>
      </div>
      <p>＠SeoHoJun 2021</p>
    </FooterBlock>
  );
};
export default Footer;
