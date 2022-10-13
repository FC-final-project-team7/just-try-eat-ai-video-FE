import styled from '~/utils/styled-components-fast';

export const MainWrapper = styled.div`
  position: relative;
  overflow-x: clip;
`;

export const MainSection = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  gap: 148px;
  margin-top: 104px;
`;

export const MainContents = styled.div`
  ${(props) => props.theme.flex.flexColumnStart}
  gap: 80px;
  align-self: flex-end;
  padding-bottom: 40px;
`;

export const LeftTextGroup = styled.div`
  ${(props) => props.theme.flex.flexColumnStart}
  gap: 44px;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.xxxLarge};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin: 0px;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: 2;
  margin: 0px;
`;

export const VideoSection = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  gap: 76px;
  margin-top: 361px;
  cursor: pointer;
`;

export const VideoImgBlock = styled.div`
  position: relative;
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AdvantageSection = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  margin-top: 374px;
`;

export const CenterTextGrop = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  gap: 24px;
`;

export const AdvantageList = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  gap: 60px;
  margin: 72px 0 76px;
`;

export const AdvantageItem = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  width: 280px;
  height: 280px;
  background-color: ${(props) => props.theme.colors.gray100};
  border-radius: 20px;
  padding-top: 68px;
  gap: 28px;
`;

export const ItemText = styled.p`
  color: ${(props) => props.theme.bg.main};
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  text-align: center;
  line-height: 1.7;
  margin: 0px;
`;

export const SentenceBlock = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  width: 960px;
  height: 112px;
  background: linear-gradient(
    90.79deg,
    rgba(78, 66, 195, 0.7) -4.26%,
    rgba(78, 66, 195, 0) 110.95%
  );
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0px 30px;
`;

export const Sentence = styled.p`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: 1.7;
`;

export const ProcessSection = styled.div`
  margin-top: 110px;
  ${(props) => props.theme.flex.flexCenter}
  position: relative;
`;

export const ProcessBg = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  width: 1420px;
  height: 1420px;
  background: linear-gradient(
    180deg,
    rgba(109, 100, 201, 0.5) 0%,
    rgba(217, 217, 217, 0) 100%
  );
  border-radius: 50%;
  padding: 236px 150px 216px;
`;

export const ProcessGroup = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  position: relative;
  margin-top: 28px;
`;

export const SecondProcessGroup = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  position: relative;
  margin-top: 40px;
`;

export const ProcessList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 993px;
  column-gap: 140px;
  margin-left: 67px;
`;

export const SecondProcessList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 993px;
  column-gap: 140px;
  margin-left: 67px;
  align-self: start;
  & :nth-child(1) {
    grid-column: 1 / span 2;
    align-items: flex-start;
  }
`;

export const ProcessLine = styled.div`
  width: 1120px;
  position: absolute;
  top: 50px;
`;

export const ProcessItem = styled.div`
  ${(props) => props.theme.flex.flexColumn}
`;

export const ItemBg = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  background-color: ${(props) => props.theme.colors.gray100};
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 40px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ItemTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin: 0 0 12px;
`;

export const ItemDescription = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  margin: 0;
  text-align: center;
`;

export const UploadIcon = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  margin-left: 11px;
  align-items: center !important;
`;

export const ProcessLogoBlock = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  margin-top: 172px;
  gap: 25px;
`;

export const ProcessLogoTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.xxxLarge};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin: 0;
`;

export const PartnersSection = styled.div`
  margin-top: 82px;
`;

export const PartnersImg = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  margin: 72px 0px 136px 0px;
`;

export const HexagonImg1 = styled.img`
  position: absolute;
  top: -200px;
  z-index: -1;
`;

export const HexagonImg2 = styled.img`
  position: absolute;
  top: 150px;
  right: 0px;
  z-index: -1;
`;

export const HexagonImg3 = styled.img`
  position: absolute;
  top: 1100px;
  left: 0px;
  z-index: -1;
`;

export const HexagonImg4 = styled.img`
  position: absolute;
  top: 2023px;
  right: -10px;
  z-index: -1;
`;

export const HexagonImg5 = styled.img`
  position: absolute;
  bottom: 149px;
  left: 0px;
  z-index: -1;
`;

export const HexagonImg6 = styled.img`
  position: absolute;
  bottom: 149px;
  right: 0px;
  z-index: -1;
`;

export const HexagonImg7 = styled.img`
  position: absolute;
  bottom: -420px;
  right: -7px;
  z-index: -1;
`;
