import React, { useState, useEffect } from "react";
import "./Index.css";
import customAxios from "../components/customAxios";
import { useSelection } from "../components/selectionContext";

function Index() {
  const [speed, setSpeed] = useState(null);
  const { selectedMenu } = useSelection();
  const [loggedInUserId] = useState(localStorage.getItem("userId"));
  const [backgroundColor, setBackgroundColor] = useState(""); // 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customAxios.post("/measure", {
          userId: loggedInUserId,
          sports: selectedMenu,
        });
        const receivedValue = response.data?.max_speed;

        if (receivedValue) {
          setSpeed(receivedValue);
          setBGColor(receivedValue);
        }
      } catch (error) {
        console.error("Error : " + error);
      }
    };

    fetchData(); // 첫 번째 렌더링 시 한 번 호출

    const interval = setInterval(() => {
      fetchData();
    }, 3400);

    return () => clearInterval(interval);
  }, [selectedMenu, loggedInUserId]); // selectedMenu 또는 loggedInUserId가 변경될 때마다 실행

  const setBGColor = (value) => {
    if (value >= 50) {
      setBackgroundColor("red");
    } 
    // else if (value >= 60 && value < 69) {
    //   setBackgroundColor("orange");
    // } else if (value >= 50 && value < 59) {
    //   setBackgroundColor("yellow");
    // } 
    else {
      setBackgroundColor("greenyellow");
    }
  };

  return (
    <div>
      <div className="container">
        <div>
          <div className="box red"></div>
          <div className="font">~90</div>
        </div>
        <div>
          <div className="box orange"></div>
          <div className="font">89~80</div>
        </div>
        <div>
          <div className="box yellow"></div>
          <div className="font">79~70</div>
        </div>
        <div>
          <div className="box greenyellow"></div>
          <div className="font">69~</div>
        </div>
      </div>
      <div className="km" style={{backgroundColor: backgroundColor}}>{speed ? `${speed}` : '0'} k/m</div>
    </div>
  );
}

export default Index;
