import styled from 'styled-components';

export const Label = styled.label`
  display: inline-block;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 20px;
  border-radius: 10px;
  border: none;
  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.main.purple};
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.gray300};
  }
`;

export const ErrorMsg = styled.span`
  color: ${(props) => props.theme.colors.gray300};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;
