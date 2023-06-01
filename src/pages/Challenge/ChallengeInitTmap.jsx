import React, { useEffect, useState } from "react";
import axios from "axios";

const ChallengeInitTmap = () => {
  const [resultdrawArr, setResultdrawArr] = useState([]);

  let map = [];

  const initTmap = async () => {
    map = new window.Tmapv2.Map("map_div", {
      center: new window.Tmapv2.LatLng(37.5652045, 126.98702028),
      width: "100%",
      height: "400px",
      zoom: 16,
      zoomControl: true,
      scrollwheel: true,
    });

    // 심볼
    // 시작
    const markerS = new window.Tmapv2.Marker({
      position: new window.Tmapv2.LatLng(37.564991, 126.983937),
      icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
      iconSize: new window.Tmapv2.Size(24, 38),
      map,
    });

    // 도착
    const markerE = new window.Tmapv2.Marker({
      position: new window.Tmapv2.LatLng(37.566158, 126.98894),
      icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
      iconSize: new window.Tmapv2.Size(24, 38),
      map,
    });

    const headers = {
      appKey: `${process.env.REACT_APP_TMAP_API_KEY}`,
    };

    try {
      const response = await axios.post(
        "https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&format=json&callback=result",
        {
          startX: "126.983937",
          startY: "37.564991",
          endX: "126.98894",
          endY: "37.566158",
          reqCoordType: "WGS84GEO",
          resCoordType: "EPSG3857",
          startName: "출발지",
          endName: "도착지",
        },
        {
          headers,
        },
      );

      const resultData = response.data.features;

      // 결과 출력
      const tDistance = `총 거리 : ${(resultData[0].properties.totalDistance / 1000).toFixed(
        1,
      )}km,`;
      const tTime = ` 총 시간 : ${(resultData[0].properties.totalTime / 60).toFixed(0)}분`;

      document.getElementById("result").innerText = tDistance + tTime;

      // 기존 그려진 라인 & 마커가 있다면 초기화
      if (resultdrawArr.length > 0) {
        for (const polyline of resultdrawArr) {
          polyline.setMap(null);
        }
        setResultdrawArr([]);
      }

      const drawInfoArr = [];

      for (const result of resultData) {
        const { geometry, properties } = result;

        if (geometry.type === "LineString") {
          for (const coordinate of geometry.coordinates) {
            const latlng = new window.Tmapv2.Point(coordinate[0], coordinate[1]);

            // eslint-disable-next-line new-cap
            const convertPoint = new window.Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlng);
            // eslint-disable-next-line no-underscore-dangle
            const convertChange = new window.Tmapv2.LatLng(convertPoint._lat, convertPoint._lng);
            drawInfoArr.push(convertChange);
          }
        } else {
          let markerImg = "";
          let pType = "";
          let size;
          if (properties.pointType === "S") {
            markerImg = "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png";
            pType = "S";
            size = new window.Tmapv2.Size(24, 38);
          } else if (properties.pointType === "E") {
            markerImg = "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png";
            pType = "E";
            size = new window.Tmapv2.Size(24, 38);
          } else {
            markerImg = "http://topopen.tmap.co.kr/imgs/point.png";
            pType = "P";
            size = new window.Tmapv2.Size(8, 8);
          }

          const latlon = new window.Tmapv2.Point(geometry.coordinates[0], geometry.coordinates[1]);
          // eslint-disable-next-line new-cap
          const convertPoint = new window.Tmapv2.Projection.convertEPSG3857ToWGS84GEO(latlon);

          const routeInfoObj = {
            markerImage: markerImg,
            // eslint-disable-next-line no-underscore-dangle
            lng: convertPoint._lng,
            // eslint-disable-next-line no-underscore-dangle
            lat: convertPoint._lat,
            pointType: pType,
          };

          const markerP = new window.Tmapv2.Marker({
            position: new window.Tmapv2.LatLng(routeInfoObj.lat, routeInfoObj.lng),
            icon: routeInfoObj.markerImage,
            iconSize: size,
            map,
          });
        }
      }
      const drawLine = arrPoint => {
        const polyline = new window.Tmapv2.Polyline({
          path: arrPoint,
          strokeColor: "#0b5cf1",
          strokeWeight: 6,
          map,
        });
        setResultdrawArr([...resultdrawArr, polyline]); // 결과로 그려진 라인 배열 업데이트
      };

      drawLine(drawInfoArr);

      const addComma = num => {
        const regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ",");
      };
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    initTmap();

    return () => {
      if (map) {
        map.destroy(); // 지도 중복 호출 막기
      }
    };
  }, []);

  return (
    /*  <div>
      <div id="map_div" style={{ width: "100%", height: "400px" }}></div>
      <p id="result"></p>
    </div> */
    <div>
      <div id="map_wrap" className="map_wrap3">
        <div id="map_div"></div>
      </div>
      <div className="map_act_btn_wrap clear_box"></div>
      <p id="result"></p>
    </div>
  );
};

export default ChallengeInitTmap;
