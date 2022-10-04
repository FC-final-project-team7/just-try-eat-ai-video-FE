import styled from 'styled-components';

type Props = {
  size?: string;
  color?: string;
};

const Container = styled.div.attrs<Props>(({ theme, ...props }) => ({
  size: props.size ?? '80px',
  color: props.color ?? theme.colors.gray100,
}))<Props>`
  font-size: ${({ size }) => size};

  .loader {
    width: 1em;
    padding: 0.125em;
    background: ${({ color }) => color};
    aspect-ratio: 1;
    border-radius: 50%;
    mask: conic-gradient(#0000, #000), linear-gradient(#000 0 0) content-box;
    mask-composite: source-out;
    mask-composite: subtract;
    box-sizing: border-box;
    animation: load 1.2s linear infinite;
    stroke-linecap: round;
  }

  @keyframes load {
    to {
      transform: rotate(1turn);
    }
  }
`;

const Loader = (props: Props) => {
  return (
    <Container {...props}>
      <div className="loader"></div>
    </Container>
  );
};
export default Loader;
