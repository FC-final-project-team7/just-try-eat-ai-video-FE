import styled from '~/utils/styled-components-fast';
import FilledButton from '../Buttons/FilledButton';

export const GNBContainer = styled.div`
  ${(props) => props.theme.flex.flexBetween}
  height: 80px;
  background-color: transparent;
  padding: 22px 120px;
`;

export const GNBTitleInput = styled.input`
  width: 560px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.sub.blueGray};
  border-radius: 10px;
  border: 0px solid;
`;

export const ButtonGroup = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  gap: 24px;
`;

export const MainButton = styled(FilledButton)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.gray100};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;

export const ListButton = styled(FilledButton)`
  background-color: ${(props) => props.theme.colors.gray100};
  color: ${(props) => props.theme.bg.main};
`;

export const LoginButton = styled(FilledButton)`
  background-color: ${(props) => props.theme.colors.gray100};
  color: ${(props) => props.theme.colors.main.purple};
`;

export const DropdownBlock = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  width: 200px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.gray100};
  border-radius: 5px;
  position: relative;
`;

export const UserName = styled.span`
  color: ${(props) => props.theme.colors.main.purple};
  margin: 0px 45px 0px 8px;
`;
