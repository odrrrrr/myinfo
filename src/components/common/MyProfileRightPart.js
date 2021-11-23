import React from 'react';
import styled, { css } from 'styled-components';

const MyProfileRightPartBlock = styled.div`
  ${(props) =>
    props.skills &&
    css`
      display: flex;
      flex-direction: column;
    `};

  flex-basis: 80%;
  background: white;
  padding: 1rem;
  border-radius: 1rem;
`;

const MyProfileRightPart = ({ children, skills }) => {
  return (
    <>
      <MyProfileRightPartBlock skills={skills}>
        {children}
      </MyProfileRightPartBlock>
    </>
  );
};
export default MyProfileRightPart;
