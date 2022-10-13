import * as S from './style';

// import logo from '~/assets/icons/logo-footer.svg';
import homeImg from '~/assets/images/footer-link-home.png';
import youtubeImg from '~/assets/images/footer-link-youtube.png';
import teamImg from '~/assets/images/footer-link-team.png';

const Footer = () => {
  return (
    <S.FootetContainer>
      <div>LOGO</div>
      {/* <img src={logo} alt="logo" /> */}
      <S.FooterWrapper>
        <S.InfoArea>
          <p>대표 홍길동 &nbsp;&nbsp; | &nbsp;&nbsp; 전화번호 02-1234-5678</p>
          <S.AddressGroup>
            <p>서울시 마포구 월드컵북로 396, 누리꿈스퀘어 연구개발타워 -호</p>
            <p>R&D Tower -, Worldcup Buk-ro 396, Sangam-dong, Mapo-gu, Seoul</p>
          </S.AddressGroup>
          <p>COPYRIGHT ©AIPARK ALL RIGHTS RESERVED </p>
        </S.InfoArea>

        <S.LinkList>
          <li>
            <a target="_blank" href="#">
              <img src={homeImg} alt="home" />
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              <img src={youtubeImg} alt="youtube" />
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              <img src={teamImg} alt="team" />
            </a>
          </li>
        </S.LinkList>
      </S.FooterWrapper>
    </S.FootetContainer>
  );
};

export default Footer;
