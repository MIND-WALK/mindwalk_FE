import React, { useState } from "react";
import { styled } from "styled-components";

const FaqTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = index => {
    setActiveTab(index);
  };

  return (
    <TabMenuContainer>
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem key={index} active={index === activeTab} onClick={() => handleTabClick(index)}>
            <ul>
              <TabTitle>{tab.title}</TabTitle>
              <TabAnswer active={index === activeTab}>{tab.description}</TabAnswer>
            </ul>
          </TabItem>
        ))}
      </TabList>
    </TabMenuContainer>
  );
};

export default FaqTabs;

const TabMenuContainer = styled.div``;

const TabList = styled.ul``;

const TabItem = styled.li``;

const TabTitle = styled.li`
  font-size: 1.6rem;
  font-weight: bold;
  height: 4.8rem;
  line-height: 4.8rem;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 2rem;
  cursor: pointer;
`;

const TabAnswer = styled.div`
  height: 0;
  font-size: 0;
  background: #f0f0f0;
  ${({ active }) =>
    active &&
    `height:auto;
    font-size:1.4rem;
    line-height:1.6;
    padding: 1.2rem 2rem;)`}
`;
