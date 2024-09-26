import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await axios.post('백엔드 API', {
                username,
                email,
                password,
            });

            if (response.data.success) {
                alert('회원가입 성공!');
                // 회원가입 성공 후 로그인 페이지로 이동하거나, 다른 로직을 추가합니다.
            } else {
                setError('회원가입에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            setError('서버와의 통신 중 오류가 발생했습니다.');
            console.error('Signup error:', error);
        }
    };

    return (
        <div className="signup-container">
            <h1>회원가입</h1>
            <form onSubmit={handleSignup} className="signup-form">
                <input
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="signup-input"
                />
                <input
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="signup-input"
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="signup-input"
                />
                <input
                    type="password"
                    placeholder="비밀번호 확인"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="signup-input"
                />
                <button type="submit" className="signup-button">
                    회원가입
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default Signup;
