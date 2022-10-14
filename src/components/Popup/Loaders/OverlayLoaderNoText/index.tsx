import Loader from '../Loader';
import styled from 'styled-components';

export const LoaderOverlay = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.bg.modal};
  z-index: 15;
`;
export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const LoaderBlocks = styled.div`
  ${(props) => props.theme.flex.flexColumn};
  position: relative;
  margin-bottom: 48px;
`;
export const TextBlock = styled.div`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  line-height: 2;
  text-align: center;
  margin: 0;
`;

const OverlayLoaderNoText = () => {
  return (
    <LoaderOverlay>
      <LoaderWrapper>
        <LoaderBlocks>
          <Loader size="170px" />
        </LoaderBlocks>
        <TextBlock>
          <p>잠시만 기다려주세요.</p>
        </TextBlock>
      </LoaderWrapper>
    </LoaderOverlay>
  );
};

export default OverlayLoaderNoText;
