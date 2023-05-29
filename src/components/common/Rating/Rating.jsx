import React, { useRef, useState } from "react";
import FullLeaf from "../CustomIcon/LeafIcon/FullLeaf";
import HalfLeaf from "../CustomIcon/LeafIcon/HalfLeaf";
import EmptyLeaf from "../CustomIcon/LeafIcon/EmptyLeaf";

const Rating = ({ rating, setRating }) => {
  const ratingRef = useRef(null);
  const [clickedRating, setClickedRating] = useState(0); // 클릭한 위치의 평점

  const handleDrag = event => {
    const rect = ratingRef.current.getBoundingClientRect();
    const { width } = rect;
    const offsetX = event.clientX - rect.left;
    const percentage = (offsetX / width) * 100;
    let newRating = Math.round((percentage / 100) * 10) / 2; // 0.5 단위로 평점 계산
    if (newRating < 0) {
      newRating = 0;
    } else if (newRating > 5) {
      newRating = 5;
    }
    setRating(newRating);
  };

  const handleRatingClick = event => {
    event.stopPropagation(); // 이벤트 전파 중지

    const roundedRating = Math.round(rating * 2) / 2; // 0.5 단위로 반올림된 평점 계산
    setClickedRating(roundedRating);
    setRating(roundedRating);
  };

  return (
    <div style={{ display: "inline-flex", cursor: "pointer" }}>
      <div
        ref={ratingRef}
        style={{ display: "flex" }}
        onMouseMove={handleDrag}
        onMouseLeave={() => setRating(clickedRating)} // 클릭한 위치의 평점으로 복원
        onClick={handleRatingClick} // 클릭한 위치의 평점으로 설정
      >
        {[1, 2, 3, 4, 5].map(index => {
          if (rating >= index) {
            return <FullLeaf key={index} size="3.9rem" />;
          }
          if (rating >= index - 0.5) {
            return <HalfLeaf key={index} size="3.9rem" />;
          }
          return <EmptyLeaf key={index} size="3.9rem" />;
        })}
      </div>
      <span>{rating}</span>
    </div>
  );
};

export default Rating;
