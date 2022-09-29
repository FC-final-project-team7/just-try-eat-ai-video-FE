import styled from 'styled-components';

export const CardBlock = styled.div`
  width: 208px;
  height: 240px;
  background-color: ${(props) => props.theme.colors.sub.blueGray};
  border-radius: 8px;
  position: relative;
  margin-left: 40px;
  &:first-child {
    margin-left: 0;
  }
`;

export const ImageBlock = styled.div`
  width: 180px;
  height: 120px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const ProjectInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center; //TODO 이것도 뺴!
  bottom: 27px;
`;

export const ProjectTitle = styled.span`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;
export const ProjectDate = styled.span`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: #b1a9ff; //TODO 이거 빼
`;
