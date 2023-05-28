import React from "react";
import { styled } from "styled-components";

import { IoIosArrowDown } from "react-icons/io";
import FaqTabs from "../../components/views/MyPage/FaqTabs";

const Faq = () => {
  const faqTabs = [
    {
      title: "Q. 마인드워크는 어떤 앱인가요?",
      description:
        "마인드 워크는 맞춤형 산책 코스를 제안해주는 앱입니다. 코로나19 이후로 많아진 은둔 청년들에게 도움을 주고자 만들어졌습니다. 감정 분석을 통해 맞춤형 산책 코스를 추천받고, 직접 해당 장소를 방문하면 마일리지가 부여됩니다.",
    },
    {
      title: "Q. 감정분석은 어떻게 하나요?",
      description:
        "감정분석은 첫번째로 AI 얼굴인식을 통해서 감정을 분석하는 방법, 두번째로 기분을 선택해 감정을 자가진단하는 방법이 있습니다. 원하시는 방법으로 감정을 분석하시면 됩니다.",
    },
    {
      title: "Q. 감정일기는 무엇인가요?",
      description:
        "달력에 나의 감정을 체크하고 일기를 쓰는 공간입니다. 산책과 일상을 기록하고 추억을 되돌아볼 수 있습니다. ( * 타인에게 공개되지 않습니다.)",
    },
    {
      title: "Q. 리워드는 무엇인가요?",
      description:
        "산책챌린지를 성공하면 포인트가 적립되고 레벨이 높아집니다. 포인트는 상품권과 교환하여 실제 사용이 가능합니다. 자세한 확인을 하시려면 리워드 페이지를 이용해주세요.",
    },
    {
      title: "Q. 포인트는 어떻게 사용하나요?",
      description:
        "적립된 포인트는 리워드 페이지에서 상품권으로 교환이 가능합니다. 교환한 상품권은 모바일 문자로 전송된 후 사용가능합니다.",
    },
    {
      title: "Q. 1:1 문의하기 답변은 언제 오나요?",
      description:
        "평균 2-3일 이내로 답변을 드리지만 상황에 따라 기간이 더 소요될 수 있습니다. 최대한 빠르게 답변드리도록 하겠습니다 :)",
    },
  ];

  return (
    <FaqContainer>
      <Title>
        자주 묻는 질문 <IoIosArrowDown />
      </Title>
      <FaqTabs tabs={faqTabs} />
    </FaqContainer>
  );
};

export default Faq;

const FaqContainer = styled.div`
  /* overflow-y: scroll;
  max-height: 56vh; */
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1rem 2rem 1.6rem 2rem;
`;
