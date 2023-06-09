import React, { useRef } from "react";
import { styled } from "styled-components";
import emailjs from "@emailjs/browser";

const Ask = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm("service_aac39rj", "template_erhkwwm", form.current, "h_v--m7myBPJRE_2n").then(
      result => {
        alert("성공적으로 이메일이 전송되었습니다.");
        form.current.reset();
      },
      error => {
        console.log(error.text);
        alert("이메일이 전송이 실패되었습니다.");
      },
    );
  };

  return (
    <AskContainer>
      <AskForm ref={form} onSubmit={sendEmail}>
        <Label>
          답변 받으실 이메일
          <Input type="email" name="user_email" placeholder="ex)abcd@naver.com" required />
        </Label>

        <Label>
          문의 제목
          <Input
            type="text"
            name="ask_title"
            placeholder="제목을 입력해주세요.(20자 이내)"
            maxLength={20}
            required
          />
        </Label>

        <Label>
          문의 내용
          <TextArea name="ask_message" placeholder="제목을 입력해주세요." required />
        </Label>

        <SubmitButton type="submit" value="문의하기" />
      </AskForm>
    </AskContainer>
  );
};

export default Ask;

const AskContainer = styled.div`
  padding: 1rem 2rem;
`;
const AskForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 1.6rem;
`;
const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid #111;
  border-radius: 0.8rem;
  height: 3.8rem;
  width: 100%;
  outline: none;
  margin: 1rem 0 1.4rem 0;
  text-indent: 0.6rem;
`;
const TextArea = styled.textarea`
  box-sizing: border-box;
  border: 1px solid #111;
  width: 100%;
  height: 17.6rem;
  border-radius: 0.8rem;
  resize: none;
  outline: none;
  margin: 1rem 0 1.4rem 0;
  text-indent: 0.6rem;
  padding-top: 0.6rem;
`;
const SubmitButton = styled.input`
  box-sizing: border-box;
  width: 19.5rem;
  height: 4.5rem;
  border-radius: 4rem;
  outline: none;
  border: none;
  margin: 1.4rem auto 0 auto;
  text-align: center;
  background: var(--sub-green-color);
  color: #fff;
  cursor: pointer;
  &:hover {
    background: var(--main-green-color);
  }
`;
