import styled from 'styled-components';
import FilledButton from '~/components/Buttons/FilledButton';
import OutlinedButton from '~/components/Buttons/OutlinedButton';
import ImageButton from '~/components/Buttons/ImageButton';

import switchImg from './assets/switch.png';
import switchImg2 from './assets/switch@2x.png';
import { ReactComponent as SwitchSVG } from './assets/switch.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

const ComponentsDisplayButtons = () => {
  return (
    <Container>
      <h1>FilledButton</h1>
      <Container>
        <h3>enabled</h3>
        <FilledButton width="small" height="small">
          채운 버튼 테스트!
        </FilledButton>
      </Container>
      <Container>
        <h3>disabled</h3>
        <FilledButton width="small" height="small" disabled>
          채운 버튼 테스트!
        </FilledButton>
      </Container>
      <h1>OutlinedButton</h1>
      <Container>
        <h3>enabled</h3>
        <OutlinedButton width="small" height="small">
          태두리 버튼 테스트!
        </OutlinedButton>
      </Container>
      <Container>
        <h3>disabled</h3>
        <OutlinedButton width="small" height="small" disabled>
          태두리 버튼 테스트!
        </OutlinedButton>
      </Container>
      <h1>ImageButton</h1>
      <h2>PNG</h2>
      <Container>
        <h3>enabled</h3>
        <ImageButton>
          <img src={switchImg} alt="switch" />
        </ImageButton>
        <div>x2</div>
        <ImageButton>
          <img src={switchImg2} alt="switch" />
        </ImageButton>
        <div>
          width={100} height={140}
        </div>
        <ImageButton>
          <img src={switchImg2} width={100} height={140} alt="switch" />
        </ImageButton>
      </Container>
      <Container>
        <h3>disabled</h3>
        <ImageButton disabled>
          <img src={switchImg} alt="switch" />
        </ImageButton>
        <div>x2</div>
        <ImageButton disabled>
          <img src={switchImg2} alt="switch" />
        </ImageButton>
        <div>
          width={100} height={140}
        </div>
        <ImageButton disabled>
          <img src={switchImg2} width={100} height={140} alt="switch" />
        </ImageButton>
      </Container>
      <h2>SVG</h2>
      <Container>
        <h3>enabled</h3>
        <ImageButton>
          <SwitchSVG fill="#f00" />
        </ImageButton>
        <div>width={100}</div>
        <ImageButton>
          <SwitchSVG fill="#f00" width={100} />
        </ImageButton>
        <div>
          width={100} height={100}
        </div>
        <ImageButton>
          <SwitchSVG fill="#f00" width={100} height={100} />
        </ImageButton>
      </Container>
      <Container>
        <h3>disable</h3>
        <ImageButton disabled>
          <SwitchSVG fill="#f00" />
        </ImageButton>
        <div>width={100}</div>
        <ImageButton disabled>
          <SwitchSVG fill="#f00" width="100" />
        </ImageButton>
        <div>
          width={100} height={100}
        </div>
        <ImageButton disabled>
          <SwitchSVG fill="#f00" width="100" height="100" />
        </ImageButton>
      </Container>
    </Container>
  );
};

export default ComponentsDisplayButtons;
