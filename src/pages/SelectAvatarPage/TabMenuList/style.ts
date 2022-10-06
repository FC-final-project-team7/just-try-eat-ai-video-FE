import styled from 'styled-components';

export const Container = styled.div`
  width: 496px;
  height: 652px;

  background: #33354c;
  border-radius: 10px;
`;

export const TabMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #5e5d6d;
  li {
    list-style: none;
    width: 112px;
    height: 60px;
    left: 372px;
    top: 4px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .focused {
      border-bottom: 1px solid #fff;
    }
  }
`;

export const TabContents = styled.div``;
