import styled from 'styled-components';

export const ListBlock = styled.div`
  width: 1200px;
  height: 320px;
  margin: 0 auto;
  position: relative;
`;

export const ListCard = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ListTitle = styled.div`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  align-self: flex-end;
  margin-bottom: 32px;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;
