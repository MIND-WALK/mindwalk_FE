import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

import { AiOutlineSmile, AiOutlineAliwangwang, AiOutlineQuestionCircle } from "react-icons/ai";
import ClickBigButton from "../../components/views/MyPage/ClickBigButton";
import ProfileContainer from "../../components/views/MyPage/ProfileContainer";
import ClickBottomModal from "../../components/common/Modal/ClickBottomModal";

const MyPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    document.documentElement.style.overflow = "hidden";
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    document.documentElement.style.overflow = "auto";
  };
  const handClickLogout = () => {
    setModalOpen(false);
    document.documentElement.style.overflow = "auto";
  };

  useEffect(() => {
    handleCloseModal();
  }, []);

  return (
    <>
      <MyPageContainer>
        <ProfileContainer />
        <MyPageContentContainer>
          <ClickBigButtonContainer>
            <ClickBigButton link="/reword" icon={<AiOutlineSmile />} text="나의 여정 확인하기" />
            <ClickBigButton
              link="/my_page/ask"
              icon={<AiOutlineAliwangwang />}
              text="1:1 문의하기"
            />
            <ClickBigButton link="/my_page/faq" icon={<AiOutlineQuestionCircle />} text="FAQ" />
          </ClickBigButtonContainer>
          <Logout>
            <P onClick={handleOpenModal}>| 로그아웃</P>
          </Logout>
        </MyPageContentContainer>
      </MyPageContainer>

      <ClickBottomModal
        modalText="로그아웃 하시겠어요?"
        buttonLeftText="취소"
        buttonRightText="로그아웃"
        modalOpen={modalOpen}
        buttonLeftOnClick={handleCloseModal}
        buttonRightOnClick={handClickLogout}
      />
    </>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  width: 100%;
  padding-bottom: 3.1rem;
  background: var(--sub-green-color);
`;
const MyPageContentContainer = styled.div`
  margin: 0 2rem;
  padding-top: 5rem;
`;
const ClickBigButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const Logout = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
const P = styled.p`
  font-size: 1.4rem;
  padding-top: 3.3rem;
  color: #fff;
`;
