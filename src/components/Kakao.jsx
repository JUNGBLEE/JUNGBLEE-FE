/* global kakao */
import React, { useEffect, useState } from "react";
import { useMapApi } from "../apis/map/index";

const { kakao } = window;

const Map = () => {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map");
    const options = { center: new kakao.maps.LatLng(37.57292416, 127.0156635) };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  let markerPosition = new kakao.maps.LatLng(37.57296416, 127.0156635);

  // 마커를 생성
  let marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  // 마커를 지도 위에 표시
  marker.setMap(map);

  let markerPosition3 = new kakao.maps.LatLng(37.57206415, 127.0167635);

  let marker3 = new kakao.maps.Marker({
    position: markerPosition3,
  });

  marker3.setMap(map);

  let markerPosition4 = new kakao.maps.LatLng(37.57506415, 127.0168635);

  let marker4 = new kakao.maps.Marker({
    position: markerPosition4,
  });

  marker4.setMap(map);

  let markerPosition5 = new kakao.maps.LatLng(37.57506415, 127.0118635);

  let marker5 = new kakao.maps.Marker({
    position: markerPosition5,
  });

  marker5.setMap(map);

  let markerPosition6 = new kakao.maps.LatLng(37.57206415, 127.0118635);

  let marker6 = new kakao.maps.Marker({
    position: markerPosition6,
  });

  marker6.setMap(map);

  marker5.setMap(map);

  let markerPosition7 = new kakao.maps.LatLng(37.57206415, 127.0138635);

  let marker7 = new kakao.maps.Marker({
    position: markerPosition7,
  });

  marker7.setMap(map);

  marker5.setMap(map);

  let markerPosition8 = new kakao.maps.LatLng(37.57206415, 127.0198635);

  let marker8 = new kakao.maps.Marker({
    position: markerPosition8,
  });

  marker8.setMap(map);

  let markerPosition9 = new kakao.maps.LatLng(37.6806415, 127.0198635);

  let marker9 = new kakao.maps.Marker({
    position: markerPosition9,
  });

  marker9.setMap(map);

  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        marginTop: 120,
      }}
    >
      <div id="map" style={{ width: "100%", height: "600px" }}></div>
    </div>
  );
};

export default Map;
