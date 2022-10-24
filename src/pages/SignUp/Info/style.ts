import styled from 'styled-components';
import FilledButton from '~/components/Buttons/FilledButton';

export const Container = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  margin-top: 64px;
  p {
    margin: 0;
  }
`;

export const InputList = styled.div`
  display: flex;
  flex-direction: column;
  width: 392px;
  gap: 36px;
  margin: 64px 0 48px;
`;

export const EmailInputGroup = styled.div`
  display: flex;
`;

export const EmailAuthButton = styled(FilledButton)`
  align-self: flex-end;
  border-radius: 10px;
`;

export const SignUpButton = styled(FilledButton)`
  margin-bottom: 70px;
  border-radius: 10px;
  font-size: ${(props) => props.theme.fontSize.large};
`;
