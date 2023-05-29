import React, { useState } from "react";
import { styled } from "styled-components";

import { IoIosArrowDown } from "react-icons/io";

const FaqTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(-1);

  const handleTabClick = index => {
    setActiveTab(index);
  };

  return (
    <div className="tabMenuContainer">
      <ul>
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            active={`${index === activeTab}`}
            onClick={() => handleTabClick(index)}
          >
            <ul>
              <TabTitle>
                {tab.title} <IoIosArrowDown />
              </TabTitle>
              <TabAnswer active={`${index === activeTab}`}>{tab.description}</TabAnswer>
            </ul>
          </TabItem>
        ))}
      </ul>
    </div>
  );
};

export default FaqTabs;

const TabItem = styled.li`
  color: var(--sub-green-color);
`;

const TabTitle = styled.li`
  font-size: 1.6rem;
  font-weight: bold;
  height: 4.8rem;
  line-height: 4.8rem;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabAnswer = styled.div`
  height: 0;
  font-size: 0;
  background: var(--sub-green-color);
  color: #fff;
  ${({ active }) =>
    active === "true" &&
    `height:auto;
    font-size:1.4rem;
    line-height:1.6;
    padding: 1.2rem 2rem;)`}
`;
