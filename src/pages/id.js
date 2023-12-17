import React, { useState, useEffect } from 'react';
import customAxios from '../components/customAxios';
import './Id.css';

function Id() {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');

    if (storedUserId) {
      alert(`로그인 되어 있습니다. (아이디: ${storedUserId})`);
      window.location.href = '/'; // 이미 로그인되어있으면 '/'로 이동
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await customAxios.post('/main', { value: userId });

      if (response.status === 201) {
        alert('계정이 생성되었습니다.');
        localStorage.setItem('userId', userId); // 아이디 정보를 localStorage에 저장
      } else if (response.status === 200) {
        alert('로그인 되었습니다.');
        localStorage.setItem('userId', userId); // 아이디 정보를 localStorage에 저장
      }
      
      window.location.href = '/'; // 무조건 '/'로 리다이렉트
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <div className="id">
      <form onSubmit={handleSubmit}>
        <div className="id_label">아이디 입력</div>
        <div className="id_input_container">
          <input
            className="id_input"
            type="text"
            placeholder="ID 입력하시오"
            value={userId}
            onChange={handleInputChange}
          />
          <button className="id_button" type="submit">완료</button>
        </div>
      </form>
    </div>
  );
}

export default Id;
