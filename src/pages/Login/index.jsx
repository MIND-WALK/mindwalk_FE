import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSmile } from "react-icons/ai";
import axios from "axios";
import { useRecoilState } from "recoil";
import loginLogo from "../../assets/img/loginLogo.png";
import loginBg from "../../assets/img/loginBg.png";
import userIdState from "../../recoil/userIdState";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 아직 recoil state파일 없음
  const [userAuthState, setUserAuthState] = useRecoilState(userIdState);

  const handleChangeId = e => {
    setId(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const url = process.env.REACT_APP_API_URL;

  // API연결전 세팅
  const handleSubmit = async e => {
    e.preventDefault();

    const body = {
      id,
      password,
    };
    // console.log(body);
    try {
      const response = await axios.post(`${url}/join`, body, { Accept: "*/*" });
      /*   const userId = response.data.data; */

      console.log(response);
      /* if (loginData.data.code === 200) {
        setUserIdState(userId);
         alert("로그인 되었습니다.");
         navigate("/");
      } */
    } catch (error) {
      console.error(error);
      alert("오류로 인해 로그인이 실패되었습니다.");
    }
  };

  return (
    <LoginContainer>
      <LoginWrap>
        <Logo>
          <img src={loginLogo} alt="마인드 워크 로고" />
        </Logo>

        <LoginBox onSubmit={handleSubmit}>
          <Text>
            마인드 워크 방문을 환영합니다 <AiOutlineSmile />
          </Text>
          <Input type="text" name="id" placeholder="Id" required onChange={handleChangeId} />
          <Input
            type="text"
            name="password"
            placeholder="Password"
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
  background-size: cover;
  width: 375px;
  height: 667px;
`;
const LoginWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  text-indent: 1.4rem;
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
  background: var(--main-green-color);
  font-size: 1.8rem;
  color: #fff;
  &:hover {
    background: var(--sub-green-color);
  }
`;
