import React from "react";
import { styled } from "styled-components";

const ProfileContainer = () => {
  return (
    <ProfileBox>
      <ProfileContentConainer>
        <ProfileImg></ProfileImg>
        <Text>박나나 님 환영합니다!</Text>
      </ProfileContentConainer>
    </ProfileBox>
  );
};

export default ProfileContainer;

const ProfileBox = styled.div`
  position: relative;
  width: 100%;
  height: 30.2rem;
  background: #fff;
`;
const ProfileContentConainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProfileImg = styled.div`
  background: #ece7e7;
  border-radius: 50%;
  width: 12.2rem;
  height: 12.2rem;
  margin: 0 auto 2rem auto;
`;
const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--sub-green-color);
`;
