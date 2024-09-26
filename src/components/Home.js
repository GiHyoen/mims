import React from "react";
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
  
    const handleSingClick = () => {
      navigate('/sing');
    };

    const handlePoolClick = () => {
      navigate('/pool');
    };

    const handleLaundryClick = () => {
      navigate('/laundry');
    };

    const handleAnotherClick = () => {
      navigate('/another'); 
    };
  
    return (
      <div>
        <div className="button-row">
          <button className="bigButton" onClick={handleSingClick}>노래방</button>
          <button className="bigButton" onClick={handlePoolClick}>당구장</button>
        </div>
        <div className="button-row">
          <button className="bigButton" onClick={handleLaundryClick}>빨래방</button>
          <button className="bigButton" onClick={handleAnotherClick}>기타</button>
        </div>
      </div>
    );
};

export default Home;
