import React from "react";
import {
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherCloudy,
} from "react-icons/ti";

import { BsCloudFog } from "react-icons/bs";
import SunnyIcon from "../components/common/CustomIcon/WeatherIcon/SunnyIcon";
import StormyIcon from "../components/common/CustomIcon/WeatherIcon/StormyIcon";
import RainIcon from "../components/common/CustomIcon/WeatherIcon/RainIcon";
import DownPourIcon from "../components/common/CustomIcon/WeatherIcon/DownPourIcon";
import SnowIcon from "../components/common/CustomIcon/WeatherIcon/SnowIcon";
import FogIcon from "../components/common/CustomIcon/WeatherIcon/FogIcon";
import CloudyIcon from "../components/common/CustomIcon/WeatherIcon/CloudyIcon";

const useIcon = ({ weatherData }) => {
  if (!weatherData) return null;
  const iconId = weatherData.id === 800 ? 0 : Math.floor(weatherData.id / 100);
  let backgroundColor = "";
  let soildIcon = "";
  let title;
  switch (iconId) {
    case 0:
      backgroundColor = "linear-gradient(180deg, rgba(245,200,98,1) 0%, rgba(245,200,98,0) 100%)";
      soildIcon = <TiWeatherSunny size="2.4rem" />;
      title = (
        <p>
          산책하기 좋은 날이에요!
          <br /> 가볍게 바람을 맞이하는건 어떤가요?
        </p>
      );
      return { icon: <SunnyIcon size="11rem" />, backgroundColor, soildIcon, title };
    case 2:
      backgroundColor =
        " linear-gradient(180deg, rgba(224,224,224,1) 0%, rgba(224,224,224,0) 100%)";
      soildIcon = <TiWeatherStormy size="2.4rem" />;
      title = (
        <p>
          비가 올 수 있으니
          <br /> 우산을 챙겨서 나가보는건 어떨까요?
        </p>
      );
      return { icon: <StormyIcon size="11rem" />, backgroundColor, soildIcon, title };
    case 3:
      backgroundColor = "linear-gradient(180deg, #62AEF5 0%, rgba(255, 255, 255, 0) 100%)";
      soildIcon = <TiWeatherShower size="2.4rem" />;
      title = (
        <p>
          산책하기 아쉽지만,
          <br /> 여유롭게 책을 읽어보는건 어떨까요?
        </p>
      );
      return { icon: <RainIcon size="11rem" />, backgroundColor, soildIcon, title };
    case 5:
      backgroundColor = "linear-gradient(180deg, rgba(117,171,195,1) 0%, rgba(224,224,224,0) 100%)";
      soildIcon = <TiWeatherDownpour size="2.4rem" />;
      title = (
        <p>
          비가 올 수 있으니
          <br /> 우산을 챙겨서 나가보는건 어떨까요?
        </p>
      );
      return { icon: <DownPourIcon size="11rem" />, backgroundColor, soildIcon, title };
    case 6:
      backgroundColor = "linear-gradient(180deg, #b3d5e4 0%, rgba(224,224,224,0) 100%)";
      soildIcon = <TiWeatherSnow size="2.4rem" />;
      title = (
        <p>
          옷 단단히 챙겨입고,
          <br /> 눈내리는 날을 즐겨보는건 어떨까요?
        </p>
      );
      return { icon: <SnowIcon size="11rem" />, backgroundColor, soildIcon, title };
    case 7:
      backgroundColor = "linear-gradient(180deg, #98a1a5 0%, rgba(224,224,224,0) 100%)";
      soildIcon = <BsCloudFog size="2.4rem" />;
      title = (
        <p>
          안개가 많은 날이에요!
          <br /> 조심히 나가보면 어떨까요?
        </p>
      );
      return {
        icon: <FogIcon size="11rem" />,
        backgroundColor,
        soildIcon,
        title,
      };
    case 8:
      backgroundColor = "linear-gradient(180deg, #3f8dae 0%, rgba(224,224,224,0) 100%)";
      soildIcon = <TiWeatherCloudy size="2.4rem" />;
      title = (
        <p>
          산책하기 딱 좋은 날이네요!
          <br /> 시원하게 잠깐 나가실래요?
        </p>
      );
      return { icon: <CloudyIcon size="10rem" />, backgroundColor, soildIcon, title };
    default:
      return null;
  }
};

export default useIcon;
