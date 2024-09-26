import React from "react";
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="header">
            <div className="logo" onClick={goHome}>
                MIMS
            </div>
            <nav className="navbar">
                <ul>
                    <li onClick={() => navigate('/login')}>로그인</li>
                    <li onClick={() => navigate('/signup')}>회원가입</li> {/* 회원가입 추가 */}
                    <li onClick={() => navigate('/ask')}>문의 게시판</li>
                    <li onClick={() => navigate('/free')}>자유 게시판</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
