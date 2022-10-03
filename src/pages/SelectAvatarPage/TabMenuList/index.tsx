import React, { useState } from 'react';
import * as S from './style';
import TabClosetOne from './TabComponents/TabClosetOne';
import TabClosetTwo from './TabComponents/TabClosetTwo';
import TabClosetThree from './TabComponents/TabClosetThree';
import TabBackground from './TabComponents/TabBackground';

type menuListType = {
  name: string;
  Component: React.FC<{ index: number }>;
}[];

const menuList: menuListType = [
  { name: '의상1', Component: TabClosetOne },
  { name: '의상2', Component: TabClosetTwo },
  { name: '의상3', Component: TabClosetThree },
  { name: '배경', Component: TabBackground },
];

const index = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const selectTabHandler = (index: number) => {
    setSelectedTab(index);
  };
  const Closet = menuList[selectedTab].Component;

  return (
    <>
      <S.Container>
        <S.TabMenu>
          {menuList.map((menu, index) => {
            return (
              <li
                key={index}
                className={
                  selectedTab === index ? 'tabmenu focused' : 'tabmenu'
                }
                onClick={() => selectTabHandler(index)}
              >
                {menu.name}
              </li>
            );
          })}
        </S.TabMenu>
        <S.TabContents>
          <Closet index={selectedTab} />
        </S.TabContents>
      </S.Container>
    </>
  );
};

export default index;
