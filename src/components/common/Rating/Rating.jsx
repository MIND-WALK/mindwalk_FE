import React, { useRef, useState } from "react";
import FullLeaf from "../CustomIcon/LeafIcon/FullLeaf";
import HalfLeaf from "../CustomIcon/LeafIcon/HalfLeaf";
import EmptyLeaf from "../CustomIcon/LeafIcon/EmptyLeaf";

const Rating = ({ score, setScore }) => {
  const scoreRef = useRef(null);
  const [clickedScore, setClickedScore] = useState(0); // 클릭한 위치의 평점

  const handleDrag = event => {
    const rect = scoreRef.current.getBoundingClientRect();
    const { width } = rect;
    const offsetX = event.clientX - rect.left;
    const percentage = (offsetX / width) * 100;
    let newScore = Math.round((percentage / 100) * 10) / 2; // 0.5 단위로 평점 계산
    if (newScore < 0) {
      newScore = 0;
    } else if (newScore > 5) {
      newScore = 5;
    }
    setScore(newScore);
  };

  const handleScoreClick = event => {
    event.stopPropagation(); // 이벤트 전파 중지

    const roundedScore = Math.round(score * 2) / 2; // 0.5 단위로 반올림된 평점 계산
    setClickedScore(roundedScore);
    setScore(roundedScore);
  };

  return (
    <div style={{ display: "inline-flex", cursor: "pointer" }}>
      <div
        ref={scoreRef}
        style={{ display: "flex" }}
        onMouseMove={handleDrag}
        onMouseLeave={() => setScore(clickedScore)} // 클릭한 위치의 평점으로 복원
        onClick={handleScoreClick} // 클릭한 위치의 평점으로 설정
      >
        {[1, 2, 3, 4, 5].map(index => {
          if (score >= index) {
            return <FullLeaf key={index} size="3.9rem" />;
          }
          if (score >= index - 0.5) {
            return <HalfLeaf key={index} size="3.9rem" />;
          }
          return <EmptyLeaf key={index} size="3.9rem" />;
        })}
      </div>
      <span>{score}</span>
    </div>
  );
};

export default Rating;
