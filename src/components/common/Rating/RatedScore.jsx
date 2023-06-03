/* eslint-disable no-unused-vars */
import React from "react";
import { styled } from "styled-components";
import FullLeaf from "../CustomIcon/LeafIcon/FullLeaf";
import HalfLeaf from "../CustomIcon/LeafIcon/HalfLeaf";
import EmptyLeaf from "../CustomIcon/LeafIcon/EmptyLeaf";

const RatedScore = ({ rating }) => {
  const fullLeaves = Math.floor(rating);
  const hasHalfLeaf = rating % 1 !== 0;
  const emptyLeaves = 5 - Math.ceil(rating);
  return (
    <Container>
      {[...Array(fullLeaves)].map((_, index) => (
        <FullLeaf key={index} size="3.9rem" />
      ))}
      {hasHalfLeaf && <HalfLeaf size="3.9rem" />}
      {[...Array(emptyLeaves)].map((_, index) => (
        <EmptyLeaf key={index} size="3.9rem" />
      ))}
    </Container>
  );
};

export default RatedScore;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;
