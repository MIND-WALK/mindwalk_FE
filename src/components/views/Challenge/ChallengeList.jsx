import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";

import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  challengeImgState,
  locationLatState,
  locationLongState,
  locationNameState,
} from "../../../recoil/challenge";
import CurrentLocation from "./CurrentLocation";
import ChallengeDistanceTmap from "./ChallengeDistanceTmap";

const ChallengeList = ({ emotion }) => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [article, setArticle] = useState("");
  const [locationName, setLocationName] = useRecoilState(locationNameState);
  const [locationLong, setLocationLong] = useRecoilState(locationLongState);
  const [locationLat, setLocationLat] = useRecoilState(locationLatState);

  const [challengeImg, setChallengeImg] = useRecoilState(challengeImgState);

  const navigate = useNavigate();

  const handleClickChallenge = (location, lat, long, img) => {
    setLocationName(location);
    setLocationLat(lat);
    setLocationLong(long);
    setChallengeImg(img);
    navigate("/challenge_map");
  };

  const url = `${process.env.REACT_APP_API_URL}/route/all/${emotion}`;

  useEffect(() => {
    const doGetLocation = async () => {
      const challengeData = await axios.get(url);
      setArticle(challengeData.data);
    };
    doGetLocation();
  }, [emotion]);

  return (
    <>
      <Container>
        <SubTitle>오늘 감정에 어울리는 곳을 가보는 건 어떨까요?</SubTitle>
        <LocationContainer>
          <LocationIcon />
          <LocationText>
            {/* <CurrentLocation />  */}
            {/* 현재위치 */}
            <p>현재 위치 | 서울특별시 동대문구</p>
          </LocationText>
        </LocationContainer>

        <ChallengeLists>
          {article &&
            article.map((challenge, i) => (
              <ChallengeCard
                key={i}
                onClick={() =>
                  handleClickChallenge(
                    challenge.location,
                    challenge.lat,
                    challenge.long,
                    challenge.img,
                  )
                }
                img={challenge.img}
              >
                <ChallengeInfo>
                  <ChallengeTitle>{challenge.location}</ChallengeTitle>

                  <ChallengeDetails>
                    <ChallengeDistanceTmap endLat={challenge.lat} endLong={challenge.long} />
                  </ChallengeDetails>
                </ChallengeInfo>
              </ChallengeCard>
            ))}
        </ChallengeLists>
      </Container>
    </>
  );
};

export default ChallengeList;

const Container = styled.div`
  padding: 1.25rem;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const LocationIcon = styled(MdLocationOn)`
  font-size: 1.5rem;
  margin-right: 0.625rem;
`;

const LocationText = styled.span`
  font-size: 1.4rem;
`;

const ChallengeLists = styled.ul`
  list-style: none;
  padding: 0;
`;

const ChallengeCard = styled.li`
  display: flex;
  align-items: end;
  height: 19rem;
  border-radius: 0.5rem;
  background: url(${props => props.img}) no-repeat center;
  background-size: cover;
  margin-bottom: 2.25rem;
  cursor: pointer;
  border-radius: 20px 0 0 0;
`;

const ChallengeInfo = styled.div`
  flex: 1;
  color: #000;
  background: rgba(255, 249, 166, 0.9);
  border-radius: 20px 0px 0px 0px;
  padding: 1.6rem 1rem 1.6rem 1.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const ChallengeTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.3125rem;
`;

const ChallengeDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
