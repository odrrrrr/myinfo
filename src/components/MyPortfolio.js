import React from 'react';
import styled from 'styled-components';
import MyProfileLeftPart from './common/MyProfileLeftPart';
import MyProfileRightPart from './common/MyProfileRightPart';
import Responsive from './common/Responsive';
import { IoDocumentsOutline } from 'react-icons/io5';
import wakeabird from '../images/wakeabird.jpg';
import postBlog from '../images/postBlog.jpg';
import Fade from 'react-reveal/Fade';
const MyPortfolioBlock = styled(Responsive)`
  width: 80%;
  padding-top: 1rem;
  margin: 0 auto;

  h1 {
    border-bottom: 0.2rem solid black;
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
  a {
    color: blue;
  }

  .rightWrapper {
    display: flex;
    margin: 2rem;
    img {
      width: 60%;
      height: 100%;
      object-fit: contain;
      border: 1px solid black;
      border-radius: 1rem;
    }
    div {
      width: 40%;
      padding: 3rem;
    }
    h2 {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    .rightWrapper {
      display: flex;
      flex-direction: column;
      img,
      div {
        width: 100%;
      }
    }
    p {
      font-size: 1rem;
    }
    div {
      padding: 1rem;
    }
  }
`;

const MyPortfolio = () => {
  return (
    <MyPortfolioBlock id="portfolio">
      <MyProfileLeftPart noBorder={true}>
        <h1>
          <IoDocumentsOutline />
          PortFolio
        </h1>
      </MyProfileLeftPart>
      <MyProfileRightPart>
        <div className="rightWrapper">
          <img src={wakeabird} alt="none" />

          <Fade right>
            <div>
              <h2>#아날로그 알람시계 페이지</h2>
              <p>■- 처음 리액트로 제작한 사이트</p>
              <p>■- 모바일 최적화</p>
              <p>■- 알람구현</p>
              <p>■- styled-component 주로 사용</p>
              <p>
                깃허브 :
                <a
                  href="https://github.com/odrrrrr/wakeAbird"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/odrrrrr/wakeAbird
                </a>
              </p>
              <p>
                사이트 :
                <a
                  href="https://www.wakeabird.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://wakeabird.com
                </a>
              </p>
            </div>
          </Fade>
        </div>
        <div className="rightWrapper">
          <Fade left>
            <div>
              <h2>#포스트 블로그 페이지</h2>
              <p>■- 프론트엔드 백엔드 프로젝트</p>
              <p>■- 로그인,회원가입,로그아웃 구현</p>
              <p>■- 게시글 작성,삭제,수정,이미지 업로드,페이지네이션 구현</p>
              <p>
                깃허브 :
                <a
                  href="https://github.com/odrrrrr/postBlog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/odrrrrr/postBlog
                </a>
              </p>
            </div>
          </Fade>
          <img src={postBlog} alt="none" />
        </div>
      </MyProfileRightPart>
    </MyPortfolioBlock>
  );
};
export default MyPortfolio;
