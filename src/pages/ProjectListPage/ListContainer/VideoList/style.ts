import styled from '~/utils/styled-components-fast';

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

export const EmptyBlock = styled.div`
  ${(props) => props.theme.flex.flexCenter}
`;

export const EmptyBlockTitle = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  width: 380px;
  height: 52px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.sub.blueGray};
  margin-top: 94px;
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

export const LoaderBlock = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  margin-top: 94px;
`;
