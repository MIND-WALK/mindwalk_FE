import React, { useEffect } from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import useIcon from "../../../hooks/useIcon";
import usePosition from "../../../hooks/usePosition";
import { useWeather } from "../../../hooks/queries/useWeather";
import { useLocation } from "../../../hooks/queries/useLocation";
import Loading from "../../common/Loading";

const Weather = ({ setCold, userName }) => {
  const { position, getPosition } = usePosition();

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        await getPosition();
      } catch (error) {
        console.log("Failed to get current position:", error);
      }
    };

    fetchPosition();
  }, []);

  const lat = position?.coords?.latitude;
  const lon = position?.coords?.longitude;

  const {
    data: weatherData,
    isLoading: weatherLoading,
    isError: weatherError,
  } = useWeather(lat, lon);

  const {
    data: locationData,
    isLoading: locationLoading,
    isError: locationError,
  } = useLocation(lat, lon);

  useEffect(() => {
    setCold(weatherData && weatherData.temperature < 290);
  }, [weatherData, setCold]);

  if (weatherLoading || locationLoading) {
    return <Loading />;
  }

  if (weatherError || locationError) {
    return <div>Error fetching weather data</div>;
  }

  const { icon, backgroundColor, soildIcon, title } = useIcon({ weatherData });

  return (
    <Container className="App" style={{ background: backgroundColor }}>
      <div className="inner">
        <div className="user-box">
          <p>
            {userName}님 <br />
            환영합니다!
          </p>
          <div className="temperature-box">
            <div>{weatherData.temperature.toFixed(0)}℃</div>
            <div>{soildIcon}</div>
          </div>
        </div>
        <div className="weather-box">{icon}</div>
        <div className="title-box">{title}</div>
        <div className="location-box">
          <IoLocationSharp size="2rem" /> {locationData}
        </div>
      </div>
    </Container>
  );
};

export default Weather;

const Container = styled.div`
  width: 100%;
  height: 36rem;
  font-size: 1.6rem;

  & > .inner {
    margin: 2rem;

    & > .user-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    & > .location-box {
      display: flex;
      align-items: center;
      justify-content: end;

      & > svg {
        margin-right: 0.5rem;
      }
    }

    & > .weather-box {
      display: flex;
      justify-content: center;
    }

    & > .title-box {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin: 2rem 0;
    }
  }
`;
