import React from 'react';
import styled from 'styled-components';
import Responsive from './common/Responsive';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { BsCalendar3 } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { FiMail } from 'react-icons/fi';
import MyProfileLeftPart from './common/MyProfileLeftPart';
import MyProfileRightPart from './common/MyProfileRightPart';
import Fade from 'react-reveal/Fade';

const MyProfileBlock = styled(Responsive)`
  display: flex;
  width: 70%;
  height: 500px;
  margin: 0 auto;
  padding-top: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    .reactive {
      display: inline-block;
    }
  }
`;

const ProfileTags = styled.div`
  height: 25%;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-left: 2rem;
  .reactive {
    font-weight: 700;
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const MyProfile = () => {
  return (
    <MyProfileBlock id="profile">
      <MyProfileLeftPart>
        <Fade top>
          <p>
            <AiOutlineUser />
            Profile
          </p>
        </Fade>
      </MyProfileLeftPart>
      <MyProfileRightPart>
        <Fade bottom>
          <ProfileTags>
            <MdOutlineDriveFileRenameOutline />
            이름
            <div className="reactive">- 서호준</div>
          </ProfileTags>
          <ProfileTags>
            <BsCalendar3 />
            나이
            <div className="reactive">- 99.03.03</div>
          </ProfileTags>
          <ProfileTags>
            <GoLocation />
            주소
            <div className="reactive">- 경기도 고양시</div>
          </ProfileTags>
          <ProfileTags>
            <FiMail />
            이메일-
            <div className="reactive">todaysto123@gmail.com</div>
          </ProfileTags>
        </Fade>
      </MyProfileRightPart>
    </MyProfileBlock>
  );
};
export default MyProfile;
