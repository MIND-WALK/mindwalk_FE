import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiSmile, FiFlag, FiBook, FiUser } from "react-icons/fi";
import { styled } from "styled-components";

const TabBar = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("my_journey");

  const handleTabClick = page => {
    if (currentPage === page) {
      // 클릭한 탭이 이미 현재 페이지라면 페이지 상단으로 스크롤
      window.scrollTo(0, 0);
    } else {
      setCurrentPage(page);
      navigate(`/${page}`);
    }
  };

  return (
    <TabBarContainer>
      <TabBarItem onClick={() => handleTabClick("my_journey")}>
        {/* home */}
        <FiHome size={20} />
        <TabBarLabel>홈</TabBarLabel>
      </TabBarItem>
      <TabBarItem onClick={() => handleTabClick("my_page")}>
        {/* measure */}
        <FiSmile size={20} />
        <TabBarLabel>측정</TabBarLabel>
      </TabBarItem>
      <TabBarItem onClick={() => handleTabClick("my_page")}>
        {/* challenge */}
        <FiFlag size={20} />
        <TabBarLabel>도전</TabBarLabel>
      </TabBarItem>
      <TabBarItem onClick={() => handleTabClick("my_page")}>
        {/* diary */}
        <FiBook size={20} />
        <TabBarLabel>다이어리</TabBarLabel>
      </TabBarItem>
      <TabBarItem onClick={() => handleTabClick("my_page")}>
        {/* mypage */}
        <FiUser size={20} />
        <TabBarLabel>마이페이지</TabBarLabel>
      </TabBarItem>
    </TabBarContainer>
  );
};

export default TabBar;

const TabBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--main-green-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6rem;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const TabBarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  width: 10rem;
`;

const TabBarLabel = styled.label`
  font-size: 0.625rem;
  margin-top: 0.3125rem;
`;
