import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ask.css'; // 스타일을 추가합니다.

const Ask = () => {
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 데이터 불러오기 함수
  const fetchData = async () => {
    try {
      const response = await axios.get('백엔드 API'); // 백엔드 API 주소를 넣으세요.
      setData(response.data); // 백엔드에서 받아온 데이터를 상태에 저장
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // 컴포넌트가 처음 렌더링될 때 데이터 불러오기
  useEffect(() => {
    fetchData();
  }, []);

  // 현재 페이지에 보여줄 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // 페이지네이션 버튼 생성
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="ask-container">
      <h1>문의 게시판</h1>
      <div className="total-count">Total {data.length.toLocaleString()}건</div> {/* 총 게시물 수 표시 */}
      <table className="ask-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>{item.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Ask;
