import styled from 'styled-components';

export const CardBlock = styled.div`
  width: 208px;
  height: 218px;
  position: relative;
  margin-left: 40px;
  cursor: pointer;
  border-radius: 8px;
  &:first-child {
    margin-left: 0;
  }
`;

export const CardHoverBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 74px;
  border-radius: inherit;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const CardHoverButtonBlock = styled.div`
  ${(props) => props.theme.flex.flexCenter};
  position: absolute;
  top: 8px;
  right: 8px;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
`;

export const ImageBlock = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  background-color: ${(props) => props.theme.colors.sub.blueGray};
  width: 208px;
  height: 144px;
  border-radius: 8px;
  margin: 0 auto;
`;

export const ProjectInfo = styled.div`
  ${(props) => props.theme.flex.flexColumn};
  position: absolute;
  width: 100%;
  height: 42px;
  top: 164px;
`;

export const ProjectTitle = styled.span`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  margin-bottom: 4px;
  text-align: center;
  padding: 0 15px;
`;

export const ProjectDate = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.sub.purple};
`;
