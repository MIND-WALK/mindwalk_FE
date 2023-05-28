import React from "react";
import { styled } from "styled-components";

import FaqTabs from "../../components/views/MyPage/FaqTabs";

const Faq = () => {
  const faqTabs = [
    {
      title: "Q. 마인드워크는 어떤 앱인가요?",
      description:
        "마인드 워크는 맞춤형 산책 코스를 제안해주는 앱입니다. 코로나19 이후로 많아진 은둔 청년들에게 도움을 주고자 만들어졌습니다. 감정 분석을 통해 맞춤형 산책 코스를 추천받고, 직접 해당 장소를 방문하면 챌린지를 성공할 수 있습니다.",
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
      title: "Q. 챌린지는 어떻게 하나요?",
      description:
        "감정을 분석한 후 산책 코스를 선택하여 챌린지를 진행하시면 됩니다. 해당 장소에 도착시 버튼을 누르면 GPS를 추적하여 챌린지 성공여부를 판단합니다.",
    },
    {
      title: "Q. 나의 여정은 어떤 건가요?",
      description:
        "산책 코스 챌린지 진행 상황을 파악할 수 있는 공간입니다. 해당 페이지에서 산책 기록을 확인하실 수 있습니다.",
    },
    {
      title: "Q. 1:1 문의하기 답변은 언제 오나요?",
      description:
        "평균 2-3일 이내로 답변을 드리지만 상황에 따라 기간이 더 소요될 수 있습니다. 최대한 빠르게 답변드리도록 하겠습니다 :)",
    },
  ];

  return (
    <FaqContainer>
      <Title>자주 묻는 질문</Title>
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
