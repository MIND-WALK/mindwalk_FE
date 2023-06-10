import React from "react";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";

import userIdState from "../../../recoil/userIdState";
import Level1 from "../../common/CustomIcon/UserIcon/Level1";
import userLevelCheckState from "../../../recoil/userLevelCheckState";
import Level2 from "../../common/CustomIcon/UserIcon/Level2";
import Level3 from "../../common/CustomIcon/UserIcon/Level3";
import Level4 from "../../common/CustomIcon/UserIcon/Level4";
import Level5 from "../../common/CustomIcon/UserIcon/Level5";

export const getLevelIcon = (levelNum, size) => {
  switch (levelNum) {
    case 1:
      return <Level1 size={size} />;
    case 2:
      return <Level2 size={size} />;
    case 3:
      return <Level3 size={size} />;
    case 4:
      return <Level4 size={size} />;
    case 5:
      return <Level5 size={size} />;
    default:
      return <Level5 size={size} />;
  }
};

const ProfileContainer = () => {
  const [userAuthState, setUserAuthState] = useRecoilState(userIdState);
  const [userLevel, setUserLevel] = useRecoilState(userLevelCheckState);

  const level = parseInt(userLevel / 10 + 1, 10);

  return (
    <ProfileBox>
      <ProfileContentConainer>
        <ProfileImg>{getLevelIcon(level, "10rem")}</ProfileImg>
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
  background-color: #fbf8db;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--sub-green-color);
`;
