import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  & > canvas {
    display: none;
  }
`;

export const FaceWrapper = styled.div`
  width: 100%;
  height: 35.98200899550225vh;
  max-height: 240px;
  position: relative;

  video {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }

  canvas {
    width: 100% !important;
    height: 100% !important;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const NameText = styled.span`
  width: 100%;
  height: 4.497751124437781vh;
  max-height: 30px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 10px;
`;

export const ChartWrapper = styled.div`
  width: 82.4vw;
  max-width: 309px;
  height: 26.986506746626688vh;
  max-height: 180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: end;
  box-sizing: border-box;
  padding: 0 35px;
  border-bottom: 2px solid #75c799;
`;

export const BarChart = styled.div``;

export const NumText = styled.span`
  width: 5.333vw;
  max-width: 20px;
`;

export const Bar = styled.div`
  width: 5.333vw;
  max-width: 20px;
  height: 2px;
  max-height: 200px;
  min-height: 2px;
  background: rgb(186, 240, 202);
  background: linear-gradient(to top, rgba(112, 195, 149, 1), rgba(186, 240, 202, 1));
  border-radius: 30px 30px 0 0;
`;

export const LabelWrapper = styled.div`
  width: 82.4vw;
  max-width: 309px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 35px;
`;

export const ChartLabel = styled.span`
  width: 5.333vw;
  max-width: 20px;
`;

export const NextButton = styled.button`
  width: 52vw;
  max-width: 195px;
  height: 6.746626686656672vh;
  max-height: 45px;
  background: #007d37;
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  border-radius: 40px;
`;

export const LoadingImg = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 35.98200899550225vh;
  max-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
