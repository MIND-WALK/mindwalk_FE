import React, { useEffect } from "react";
import styled from "styled-components";
import { BiMap } from "react-icons/bi";
import useIcon from "../../../hooks/useIcon";
import useWeather from "../../../hooks/queries/useWeather";

const Weather = ({ setCold, userName }) => {
  const { data: weather, isLoading, isError } = useWeather();

  useEffect(() => {
    setCold(weather && weather.temperature < 290);
  }, [weather, setCold]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching weather data</div>;
  }

  const { icon, backgroundColor, soildIcon, title } = useIcon({ weather });

  return (
    <Container className="App" style={{ background: backgroundColor }}>
      <div className="inner">
        <div className="user-box">
          <p>
            {userName}님 <br />
            환영합니다!
          </p>
          <div className="temperature-box">
            <div>{weather.temperature.toFixed(0)}℃</div>
            <div>{soildIcon}</div>
          </div>
        </div>
        <div className="weather-box">{icon}</div>
        <div className="title-box">{title}</div>
        <div className="location-box">
          <BiMap /> {weather.name}
        </div>
      </div>
    </Container>
  );
};

export default Weather;

const Container = styled.div`
  width: 100%;
  height: 35vh;
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
