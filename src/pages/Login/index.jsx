import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSmile } from "react-icons/ai";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import loginBg from "../../assets/img/Login/loginBg.png";
import userIdState from "../../recoil/userIdState";
import userLevelCheckState from "../../recoil/userLevelCheckState";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [userAuthState, setUserAuthState] = useRecoilState(userIdState);
  const [userLevel, setUserLevel] = useRecoilState(userLevelCheckState);

  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_URL;

  const handleChangeId = e => {
    setId(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const body = {
      id,
      password,
    };

    try {
      const response = await axios.post(`${url}/join`, body);

      if (response.status === 201) {
        setUserAuthState(id);
        navigate("/home");
        setUserLevel(response.data.check); // 설정하기
      }
    } catch (error) {
      console.error(error);
      alert("오류로 인해 로그인이 실패되었습니다.");
    }
  };

  return (
    <LoginContainer>
      <LoginWrap>
        {/* <Logo>
          <img src={loginLogo} alt="마인드 워크 로고" />
        </Logo> */}

        <LoginBox onSubmit={handleSubmit}>
          <Text>
            마인드 워크 방문을 환영합니다 <AiOutlineSmile />
          </Text>
          <Input
            type="text"
            name="id"
            placeholder="Id"
            autoComplete="off"
            required
            onChange={handleChangeId}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            required
            onChange={handleChangePassword}
          />
          <SubmitButton type="submit">로그인</SubmitButton>
        </LoginBox>
      </LoginWrap>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  position: relative;
  background: url(${loginBg}) no-repeat;
  background-size: 102%;
  width: 375px;
  height: 667px;
`;
const LoginWrap = styled.div`
  position: absolute;
  top: 69%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 33rem;
`;
const Logo = styled.h2`
  & > img {
    margin: 0 auto;
    display: block;
  }
`;
const Text = styled.p`
  font-size: 1.7rem;
  color: var(--sub-green-color);
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 0.4rem;
  align-items: center;
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.6);
`;
const LoginBox = styled.form`
  width: 90%;
  margin: 2rem auto 0 auto;
`;
const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid var(--main-green-color);
  border-radius: 4rem;
  height: 5.2rem;
  width: 100%;
  outline: none;
  margin: 1rem 0 1.4rem 0;
  color: var(--sub-green-color);
  font-size: 1.7rem;
  text-indent: 3.4rem;
  &::placeholder {
    color: var(--main-green-color);
  }
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 5.2rem;
  border-radius: 4rem;
  margin: 1rem auto;
  text-align: center;
  background: #fff062;
  color: #074807;
  font-size: 1.8rem;
  &:hover {
    background: var(--sub-green-color);
    color: #fff;
  }
`;
