import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import * as S from './style';
import { pagesTo } from '~/pages/pages';
import useProjectId from '~/hooks/useProjectId';

import FilledButton from '~/components/Buttons/FilledButton';
import TitleInput from './TitleInput';
import Dropdown from './Dropdown';

// import logo from '~/assets/icons/logo.svg';
import profile from '~/assets/icons/profile.svg';
import { ReactComponent as DropdownUp } from '~/assets/icons/dropdown-up.svg';
import { ReactComponent as DropdownDown } from '~/assets/icons/dropdown-down.svg';

const GNB = () => {
  const location = useLocation().pathname;
  const [showDropdown, setShowDropdown] = useState(false);

  const id = useProjectId();

  const onDropdownHandler = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <S.GNBContainer>
      <Link to={pagesTo.main}>
        <h2>LOGO</h2>
        {/* <img src={logo} alt="logo" /> */}
      </Link>
      {/* TODO 아바타 페이지도 추가 */}
      {location === pagesTo.text(id) && (
        <TitleInput defaultValue="프로젝트명" />
      )}
      <S.ButtonGroup>
        {location === pagesTo.main && (
          <>
            <Link to={pagesTo.projects}>
              <S.MainButton width="136px" height="40px">
                프로젝트 리스트
              </S.MainButton>
            </Link>
            <Link to={pagesTo.login}>
              <S.MainButton width="136px" height="40px">
                로그인
              </S.MainButton>
            </Link>
          </>
        )}
        {location === pagesTo.findId && (
          <>
            <Link to={pagesTo.login}>
              <S.LoginButton width="136px" height="40px">
                로그인
              </S.LoginButton>
            </Link>
            <Link to={pagesTo.signUp}>
              <FilledButton width="136px" height="40px">
                회원가입
              </FilledButton>
            </Link>
          </>
        )}
        {location === pagesTo.text(id) && (
          <>
            <Link to={pagesTo.projects}>
              <S.ListButton width="136px" height="40px">
                리스트
              </S.ListButton>
            </Link>
            <FilledButton width="136px" height="40px">
              다음단계로
            </FilledButton>
          </>
        )}
        {location === pagesTo.avatar && (
          <>
            <Link to={pagesTo.projects}>
              <S.ListButton width="136px" height="40px">
                리스트
              </S.ListButton>
            </Link>
            <FilledButton width="136px" height="40px">
              완료
            </FilledButton>
          </>
        )}
        {/* TODO 계정관리 경로 추가 */}
        {location === pagesTo.projects && (
          <>
            <S.DropdownBlock onClick={onDropdownHandler}>
              <img src={profile} alt="profile" />
              <S.UserName>김환경님</S.UserName>
              {showDropdown ? <DropdownUp /> : <DropdownDown />}
              {showDropdown && <Dropdown />}
            </S.DropdownBlock>
          </>
        )}
      </S.ButtonGroup>
    </S.GNBContainer>
  );
};

export default GNB;
