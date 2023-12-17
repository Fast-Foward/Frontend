// Rank.js
import React, { useState, useEffect } from 'react';
import customAxios from '../components/customAxios'; // customAxios를 가져옴
import './Rank.css';
import { useSelection } from '../components/selectionContext';

function Rank() {
  const [data, setData] = useState([]);
  const { selectedMenu } = useSelection(); // selectionContext에서 selectedMenu 값 가져오기

  useEffect(() => {
    // API에서 데이터 가져오는 함수
    const fetchData = async () => {
      try {
        const response = await customAxios.get(`/rank?sports=${selectedMenu}`); // customAxios 사용
        setData(response.data.high_to_low_data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedMenu]); // selectedMenu 값이 변경될 때마다 API 요청을 보내도록 설정

  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>순위</th>
              <th>유저</th>
              <th>속도</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Id}</td>
                <td>{item.speed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rank;
