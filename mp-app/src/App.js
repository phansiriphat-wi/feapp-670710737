import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";
import './App.css';


const students = [
  { id: 1, name: 'ฝน', year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];

const members = [
  { id: 1, name: 'วิศรุตา เอกดำรงกิจ', nickname: 'มะปราง',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'แมว'] },
  { id: 2, name: 'สุจิรา พลอยสำลี', nickname: 'เฟิร์ส',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'หมาล่า'] },
  { id: 3, name: 'ปราชญา ศัพทะเสวี', nickname: 'โอม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['โกโก้', 'เบียร์'] },
];


function App() {
  return (
    
      <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}


export default App;