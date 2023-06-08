/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef, useState } from "react";
import { TinyFaceDetectorOptions } from "face-api.js";
import * as faceapi from "face-api.js";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router";
import axios from "axios";
import {
  FaceWrapper,
  NameText,
  PageWrapper,
  ChartWrapper,
  NumText,
  BarChart,
  Bar,
  LabelWrapper,
  ChartLabel,
  NextButton,
  LoadingImg,
  ContentWrapper,
} from "./style";
import Animation from "./Animation";
import loading from "../../assets/img/Analysis/loading.gif";
import userIdState from "../../recoil/userIdState";
import emotionState from "../../recoil/emotionState";
import ClickButtonBig from "../../components/common/Buttons/ClickButtonBig";

// 비디오 사이즈 설정
const constraints = {
  video: {
    width: 640,
    height: 480,
  },
  audio: false,
};

const Analysis = () => {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);

  const [completed, setCompleted] = useState(false);
  const [expressionsList, setExpressions] = useState({
    neutral: 0,
    happy: 0,
    sad: 0,
    angry: 0,
    surprised: 0,
  });
  const [emotion, setEmotion] = useState("");
  const userAuthState = useRecoilValue(userIdState);
  const setEmotionState = useSetRecoilState(emotionState);

  const navigate = useNavigate();

  const url = process.env.REACT_APP_API_URL;

  let neutral = 0;
  let happy = 0;
  let sad = 0;
  let angry = 0;
  let surprised = 0;
  let count = 0;
  let ChartData = [];

  const onPlay = async () => {
    // 이미지 정보를 기반으로 canvas 요소 생성
    // const canvas = faceapi.createCanvasFromMedia(videoRef.current);
    const canvas = faceapi.createCanvas(videoRef.current);
    wrapRef.current.append(canvas);

    // 영상 사이즈를 canvas에 맞추기 위한 설정
    const displaySize = {
      width: videoRef.current.width,
      height: videoRef.current.height,
    };

    // canvas 사이즈를 맞춤
    faceapi.matchDimensions(canvas, displaySize);

    // 안면 인식 부분
    const faceDetecting = async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions()
        .withAgeAndGender()
        .withFaceDescriptors();

      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      // canvas 초기화
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

      resizedDetections.forEach((detection, i) => {
        const matched = resizedDetections[i];
        const { box } = matched.detection;
        const drawOptions = {
          boxColor: "yellow",
          label: false,
          lineWidth: 2,
        };
        const drawBox = new faceapi.draw.DrawBox(box, drawOptions);
        drawBox.draw(canvas);

        setExpressions({
          neutral: (resizedDetections[0].expressions.neutral * 100).toFixed(0),
          happy: (resizedDetections[0].expressions.happy * 100).toFixed(0),
          sad: (
            resizedDetections[0].expressions.sad * 100 +
            resizedDetections[0].expressions.fearful * 100
          ).toFixed(0),
          angry: (
            resizedDetections[0].expressions.angry * 100 +
            resizedDetections[0].expressions.disgusted * 100
          ).toFixed(0),
          surprised: (resizedDetections[0].expressions.surprised * 100).toFixed(0),
        });

        if (count === 30) {
          neutral = (resizedDetections[0].expressions.neutral * 100).toFixed(0);
          happy = (resizedDetections[0].expressions.happy * 100).toFixed(0);
          sad = (
            resizedDetections[0].expressions.sad * 100 +
            resizedDetections[0].expressions.fearful * 100
          ).toFixed(0);
          angry = (
            resizedDetections[0].expressions.angry * 100 +
            resizedDetections[0].expressions.disgusted * 100
          ).toFixed(0);
          surprised = (resizedDetections[0].expressions.surprised * 100).toFixed(0);
          ChartData = [
            Number(neutral),
            Number(happy),
            Number(sad),
            Number(angry),
            Number(surprised),
          ];
          const index = ChartData.indexOf(
            Math.max(Number(neutral), Number(happy), Number(sad), Number(angry), Number(surprised)),
          );
          if (index === 0) setEmotion("neutral");
          else if (index === 1) setEmotion("happy");
          else if (index === 2) setEmotion("sad");
          else if (index === 3) setEmotion("angry");
          else if (index === 4) setEmotion("surprised");
          setCompleted(true);
          videoRef.current.pause();
        }
      });
      if (resizedDetections !== []) {
        count++;
      }
    };

    const loop = () => {
      faceDetecting();
      setTimeout(loop);
    };
    setTimeout(loop);
  };

  const startDetecting = async () => {
    // model load
    const loadModels = async () => {
      const MODEL_URL = `${process.env.PUBLIC_URL}/models`;

      Promise.all([
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        // video 에서 로드된 이미지 매칭 시 아래 모델이 필요 함.
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
        faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
      ]).then(() => {
        startVideo();
      });
    };

    loadModels();
  };

  // 영상 권한 요청
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      // eslint-disable-next-line no-return-assign
      .then(stream => (videoRef.current.srcObject = stream))
      .catch(err => console.error(err));
  };

  const angryText = document.getElementById("angry");
  const neutralText = document.getElementById("neutral");
  const happyText = document.getElementById("happy");
  const sadText = document.getElementById("sad");
  const surprisedText = document.getElementById("surprised");
  const angryBar = document.getElementById("angry-bar");
  const neutralBar = document.getElementById("neutral-bar");
  const happyBar = document.getElementById("happy-bar");
  const sadBar = document.getElementById("sad-bar");
  const surprisedBar = document.getElementById("surprised-bar");

  useEffect(() => {
    startDetecting();
  }, []);

  useEffect(() => {
    if (angryText !== null) {
      angryText.innerText = `${expressionsList.angry}%`;
      neutralText.innerText = `${expressionsList.neutral}%`;
      happyText.innerText = `${expressionsList.happy}%`;
      sadText.innerText = `${expressionsList.sad}%`;
      surprisedText.innerText = `${expressionsList.surprised}%`;

      angryBar.style.height = `${expressionsList.angry * 1.5}px`;
      neutralBar.style.height = `${expressionsList.neutral * 1.5}px`;
      happyBar.style.height = `${expressionsList.happy * 1.5}px`;
      sadBar.style.height = `${expressionsList.sad * 1.5}px`;
      surprisedBar.style.height = `${expressionsList.surprised * 1.5}px`;
    }
  }, [expressionsList]);

  const handleClickResult = async () => {
    const body = {
      id: userAuthState,
      emotion,
    };
    try {
      const response = await axios.post(`/api/emotion/${userAuthState}`, body);
      if (response.status === 201) {
        setEmotionState({emotion: emotion, time: new Date()});
        navigate(`/challenge/${emotion}`);
      }
    } catch (error) {
      console.error(error);
      alert("감정 결과 전송 실패.");
    }
  };

  return (
    <PageWrapper>
      <FaceWrapper ref={wrapRef}>
        <video ref={videoRef} autoPlay muted onPlay={onPlay} width={640} height={480} />
      </FaceWrapper>
      <ContentWrapper>
        {completed ? (
          <>
            <NameText>{`오늘 ${userAuthState}님의 감정은?`}</NameText>
            <ChartWrapper>
              <BarChart>
                <NumText id="neutral">{neutral}</NumText>
                <Bar id="neutral-bar" />
              </BarChart>
              <BarChart>
                <NumText id="happy">{happy}</NumText>
                <Bar id="happy-bar" />
              </BarChart>
              <BarChart>
                <NumText id="sad">{sad}</NumText>
                <Bar id="sad-bar" />
              </BarChart>
              <BarChart>
                <NumText id="angry">{angry}</NumText>
                <Bar id="angry-bar" />
              </BarChart>
              <BarChart>
                <NumText id="surprised">{surprised}</NumText>
                <Bar id="surprised-bar" />
              </BarChart>
            </ChartWrapper>
            <LabelWrapper>
              <ChartLabel>평온</ChartLabel>
              <ChartLabel>기쁨</ChartLabel>
              <ChartLabel>슬픔</ChartLabel>
              <ChartLabel>분노</ChartLabel>
              <ChartLabel>흥분</ChartLabel>
            </LabelWrapper>
          </>
        ) : (
          // <Animation />
          <LoadingImg src={loading} alt="loading" />
        )}
      </ContentWrapper>
      {completed ? (
        <ClickButtonBig onClick={handleClickResult} buttonText={"감정 분석 완료"} />
      ) : (
        <></>
      )}
    </PageWrapper>
  );
};

export default Analysis;
