import styled from 'styled-components';

export const StepperContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 800px;
  height: 80px;
  margin-top: 12px;
`;

export const StepperLine = styled.div`
  width: 720px;
  position: absolute;
`;

export const CircleList = styled.div`
  display: flex;
  position: absolute;
  top: 6px;
  left: 79px;
  gap: 219px;
`;

export const CircleItem = styled.div`
  width: 59px;
  ${(props) => props.theme.flex.flexColumn}
  gap: 10px;
`;

export const ActiveCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.main.purple};
`;

export const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.gray400};
`;

export const CircleTitle = styled.div`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;
