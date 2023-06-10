import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import ClickButtonBig from "../../components/common/Buttons/ClickButtonBig";
import firstImage from "../../assets/splash/splash-1.png";
import secondImage from "../../assets/splash/splash-2.png";
import thirdImage from "../../assets/splash/splash-3.png";

const Splash = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const slideContainerRef = useRef(null);

  const handleDotClick = index => {
    if (slideContainerRef.current) {
      setActiveIndex(index);
      const containerWidth = slideContainerRef.current.offsetWidth;
      slideContainerRef.current.style.transform = `translateX(-${"375" * index}px)`;
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const slides = [
    {
      id: 1,
      img: firstImage,
      text: (
        <p>
          마음과 함께 걷는 시간 <br />
          마인드 워크
        </p>
      ),
    },
    {
      id: 2,
      img: secondImage,
      text: (
        <p>
          감정을 분석해 맞춤형 <br />
          산책 코스를 추천해드립니다.
        </p>
      ),
    },
    {
      id: 3,
      img: thirdImage,
      text: (
        <p>
          산책 챌린지 후 감정 일기를 통해 <br />
          내 감정을 다스려 보는건 어떨까요? <br />
          지금 마인드 워크를 시작해보세요 :)
        </p>
      ),
    },
  ];

  return (
    <Container>
      <SplashContainer ref={slideContainerRef}>
        {slides.map(item => (
          <SlideItem key={item.id}>
            <img src={item.img} alt="slide" />
            <div className="splash-title">{item.text}</div>
          </SlideItem>
        ))}
      </SplashContainer>
      <DotContainer>
        {slides.map((slide, index) => (
          <Dot
            key={slide.id}
            activeindex={index === activeIndex ? "true" : "false"}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotContainer>
      <ClickButtonBig
        onClick={goToLogin}
        buttonClassName="home-button"
        buttonText="지금 시작하기"
      />
    </Container>
  );
};

export default Splash;

const Container = styled.div`
  display: flex;
  font-size: 1.8rem;
  text-align: center;
  margin-top: 10rem;

  @keyframes spinning {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SplashContainer = styled.div`
  display: flex;
  width: 112.5rem;
`;

const SlideItem = styled.div`
  width: 37.5rem;
  display: grid;
  grid-template-rows: 2fr 1fr;
  place-items: center;

  & img {
    width: 20rem;
    margin-bottom: 5rem;
  }

  & .splash-title {
    height: 10rem;
  }
`;

const DotContainer = styled.div`
  position: fixed;
  bottom: 15rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ activeindex }) =>
    activeindex === "true" ? "var(--main-green-color)" : "#ccc"};
  cursor: pointer;
`;
