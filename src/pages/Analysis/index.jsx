/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef, useState } from "react";
import { TinyFaceDetectorOptions } from "face-api.js";
import * as faceapi from "face-api.js";
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
} from "./style";
import Animation from "./Animation";

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

  let neutral = 0;
  let happy = 0;
  let sad = 0;
  let angry = 0;
  let surprised = 0;
  let count = 0;
  const ChartData = [];

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
          neutral: (resizedDetections[0].expressions.neutral * 100).toFixed(2),
          happy: (resizedDetections[0].expressions.happy * 100).toFixed(2),
          sad: (
            resizedDetections[0].expressions.sad * 100 +
            resizedDetections[0].expressions.fearful * 100
          ).toFixed(2),
          angry: (
            resizedDetections[0].expressions.angry * 100 +
            resizedDetections[0].expressions.disgusted * 100
          ).toFixed(2),
          surprised: (resizedDetections[0].expressions.surprised * 100).toFixed(2),
        });

        if (count === 50) {
          neutral = (resizedDetections[0].expressions.neutral * 100).toFixed(2);
          happy = (resizedDetections[0].expressions.happy * 100).toFixed(2);
          sad = (
            resizedDetections[0].expressions.sad * 100 +
            resizedDetections[0].expressions.fearful * 100
          ).toFixed(2);
          angry = (
            resizedDetections[0].expressions.angry * 100 +
            resizedDetections[0].expressions.disgusted * 100
          ).toFixed(2);
          surprised = (resizedDetections[0].expressions.surprised * 100).toFixed(2);
          setCompleted(true);
        }
      });
      count++;
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

      angryBar.style.height = `${expressionsList.angry * 1.8}px`;
      neutralBar.style.height = `${expressionsList.neutral * 1.8}px`;
      happyBar.style.height = `${expressionsList.happy * 1.8}px`;
      sadBar.style.height = `${expressionsList.sad * 1.8}px`;
      surprisedBar.style.height = `${expressionsList.surprised * 1.8}px`;
    }
  }, [expressionsList]);

  return (
    <PageWrapper>
      <FaceWrapper ref={wrapRef}>
        <video ref={videoRef} autoPlay muted onPlay={onPlay} width={640} height={480} />
      </FaceWrapper>
      <NameText>{completed ? "오늘 안혜지님의 감정은?" : "감정 분석 중입니다."}</NameText>
      {completed ? (
        <>
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
        <Animation />
      )}
      <NextButton>{completed ? "감정 분석 완료" : "감정 분석 중"}</NextButton>
    </PageWrapper>
  );
};

export default Analysis;
