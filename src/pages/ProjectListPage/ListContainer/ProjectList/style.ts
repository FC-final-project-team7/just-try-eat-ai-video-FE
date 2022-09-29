import styled from 'styled-components';
import FilledButton from '~/components/Buttons/FilledButton';

export const ListBlock = styled.div`
  width: 1200px;
  height: 320px;
  margin: 0 auto;
  position: relative;
`;

export const ListCard = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListTitle = styled.div`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  align-self: flex-end;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;
export const button = styled(FilledButton)`
  width: 148px;
  height: 48px;
`;
