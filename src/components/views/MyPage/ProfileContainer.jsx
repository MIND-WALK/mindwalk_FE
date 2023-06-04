import React from "react";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";

import userIdState from "../../../recoil/userIdState";
import levelImg from "../../../assets/img/Level/level1.png";

const ProfileContainer = () => {
  const [userAuthState, setUserAuthState] = useRecoilState(userIdState);

  return (
    <ProfileBox>
      <ProfileContentConainer>
        <ProfileImg style={{ background: `url(${levelImg}) no-repeat center/cover` }}></ProfileImg>
        <Text>{userAuthState} 님 환영합니다!</Text>
      </ProfileContentConainer>
    </ProfileBox>
  );
};

export default ProfileContainer;

const ProfileBox = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  background: #fff;
`;
const ProfileContentConainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProfileImg = styled.div`
  border-radius: 50%;
  width: 12.2rem;
  height: 12.2rem;
  margin: 0 auto 2rem auto;
  border: 1px solid #787878;
`;
const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--sub-green-color);
`;
