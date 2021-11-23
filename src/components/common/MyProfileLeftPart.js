import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const MyProfileLeftPartBlock = styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 3rem;

  @media (max-width: 768px) {
    padding-right: 0;
    border-right: 0;
    border-bottom: 0.5rem solid ${palette.cyan[1]};
  }
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  border-right: 0.5rem solid ${palette.cyan[1]};
  p {
    border-bottom: 0.2rem solid black;
    font-size: 3rem;
  }
  ${(props) =>
    props.noBorder &&
    css`
      border-right: 0;
      border-bottom: 0.5rem solid ${palette.cyan[7]};
    `};
`;

const MyProfileLeftPart = ({ children, noBorder }) => {
  return (
    <MyProfileLeftPartBlock noBorder={noBorder}>
      {children}
    </MyProfileLeftPartBlock>
  );
};
export default MyProfileLeftPart;
