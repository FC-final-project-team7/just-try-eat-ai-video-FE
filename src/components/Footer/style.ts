import styled from 'styled-components';

export const FootetContainer = styled.div`
  padding: 44px 120px 32px;
  & p {
    margin: 0;
  }
`;
export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  & :nth-child(2) {
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

export const InfoArea = styled.div`
  ${(props) => props.theme.flex.flexColumnStart}
  margin-top: 38px;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  gap: 22px;
`;

export const AddressGroup = styled.div`
  line-height: 1.5;
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 16px;
  margin: 0;
`;
