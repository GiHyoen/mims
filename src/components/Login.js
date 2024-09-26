import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // CSS 파일을 추가하여 스타일 적용

const Login = () => {
  const [username, setUsername] = useState(''); // 아이디 상태
  const [password, setPassword] = useState(''); // 비밀번호 상태
  const [error, setError] = useState(''); // 에러 메시지 상태

  // 로그인 요청 함수
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // 서버에 로그인 요청
      const response = await axios.post('백엔드 API', {
        username,
        password,
      });

      // 로그인 성공 시 처리 (예: 토큰 저장, 메인 페이지로 이동 등)
      if (response.data.success) {
        alert('로그인 성공!');
        // 로그인 성공 시 메인 페이지로 이동하거나 토큰을 로컬 스토리지에 저장합니다.
        // 예: localStorage.setItem('token', response.data.token);
      } else {
        setError('로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.');
      }
    } catch (error) {
      setError('서버와의 통신 중 오류가 발생했습니다.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h1>로그인</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          로그인
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
