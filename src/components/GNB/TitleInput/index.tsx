import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '~/components/Popup/hooks';

export const GNBTitleContainer = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  width: 560px;
  height: 48px;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.light};
  background-color: ${(props) => props.theme.colors.sub.blueGray};
  border-radius: 10px;
  border: 0px solid;
`;

export const GNBTitleInput = styled.input`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.gray100};
  font-size: inherit;
  font-weight: inherit;
  background-color: inherit;
  font-size: inherit;
  font-weight: inherit;
  border-radius: inherit;
  border: inherit;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

type Props = {
  defaultValue: string;
};

function TitleInput(props: Props) {
  const { defaultValue } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  const [text, setText] = useState(defaultValue);
  const [editable, setEditable] = useState(false);

  const onEditHandler = () => {
    setEditable(true);
  };

  const onChangehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setEditable(!editable);
    }
  };

  useOnClickOutside(ref, () => {
    setEditable(false);
  });

  return (
    <>
      <GNBTitleContainer ref={ref}>
        {editable ? (
          <GNBTitleInput
            type="text"
            value={text}
            onChange={onChangehandler}
            onKeyDown={onKeyDownHandler}
          />
        ) : (
          <div onClick={onEditHandler}>{`${text}.proj`}</div>
        )}
      </GNBTitleContainer>
    </>
  );
}

export default TitleInput;
