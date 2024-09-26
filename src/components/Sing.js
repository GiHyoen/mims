import React, { useState } from 'react';
import './Sing.css';

const generateTimeSlots = () => {
  const slots = [];
  let currentTime = new Date(0, 0, 0, 8, 0); // 시작 시간: 08:00
  for (let i = 0; i < 72; i++) { // 24시간을 20분 단위로 나눔
    const endTime = new Date(currentTime.getTime() + 20 * 60000); // 20분 후의 시간
    slots.push(
      `${currentTime.toTimeString().slice(0, 5)} ~ ${endTime
        .toTimeString()
        .slice(0, 5)}`
    );
    currentTime = endTime;
  }
  return slots;
};

const Sing = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // 선택된 방 번호 (1, 2, 3)
  const [reservations, setReservations] = useState({
    1: Array(72).fill('X'),
    2: Array(72).fill('X'),
    3: Array(72).fill('X'),
  });

  const timeSlots = generateTimeSlots();

  // 방 예약 상태 변경 함수
  const toggleReservation = (room, index) => {
    setReservations((prev) => ({
      ...prev,
      [room]: prev[room].map((status, i) =>
        i === index ? (status === 'X' ? 'O' : 'X') : status
      ),
    }));
  };

  return (
    <div className="sing-container">
      <h1>노래방 예약 시스템</h1>
      <div className="room-selection">
        <button onClick={() => setSelectedRoom(1)}>1번 방</button>
        <button onClick={() => setSelectedRoom(2)}>2번 방</button>
        <button onClick={() => setSelectedRoom(3)}>3번 방</button>
      </div>

      {selectedRoom && (
        <div className="time-slots">
          <h2>{selectedRoom}번 방 예약 시간대</h2>
          <ul>
            {timeSlots.map((slot, index) => (
              <li
                key={index}
                className={`time-slot ${
                  reservations[selectedRoom][index] === 'O' ? 'reserved' : 'available'
                }`}
                onClick={() => toggleReservation(selectedRoom, index)}
              >
                {slot} | {reservations[selectedRoom][index]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sing;
