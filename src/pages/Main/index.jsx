import React, { useState } from "react";

import styled, { css } from "styled-components";
import Weather from "../../components/views/Main/Weather";
import CompletedJourney from "../CompletedJourney/index";

const Main = () => {
  const [cold, setCold] = useState();

  return (
    <Wrapper className="App" cold={cold !== undefined ? cold.toString() : undefined}>
      <Weather setCold={setCold} userName="안혜지" />
      <CompletedJourney />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};
`;
