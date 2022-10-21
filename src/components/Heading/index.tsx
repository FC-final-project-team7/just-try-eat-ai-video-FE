import React from 'react';
import styled from 'styled-components';

export const H1Styled = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xLarge};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  margin: 0px;
`;

const Heading = (props: JSX.IntrinsicElements['h1']) => {
  return <H1Styled {...props} />;
};

export default React.memo(Heading);
