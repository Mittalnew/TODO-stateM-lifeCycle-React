import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import MyCard from "./components/MyCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Data fetching
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const cardColors = ["bg-red-100", "bg-blue-100", "bg-green-100"]; // Define an array of colors

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home users={users} cardColors={cardColors} />}
          />
          <Route path="/MyCard/:name" element={<MyCard users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home({ users, cardColors }) {
  // Split users into two arrays, topCards and middleCard
  const topCards = users.slice(0, 2);
  const middleCard = users.slice(2, 3);

  return (
    <div className=" flex flex-col items-center justify-center">
      {/* Top row with two centered cards */}
      <div className="flex justify-center flex-wrap sm:flex-no-wrap">
        {topCards.map((user, index) => (
          <div className="w-full sm:w-1/2" key={index}>
            <Card
              key={index}
              name={user.name}
              email={user.email}
              department={user.department}
              profilePic={user.profilePic}
              cardColor={cardColors[index % cardColors.length]}
            />
          </div>
        ))}
      </div>

      {/* Middle row with a centered card */}
      <div className="mt-4 sm:flex-col">
        {middleCard.map((user, index) => (
          <Card
            key={2}
            name={user.name}
            email={user.email}
            department={user.department}
            profilePic={user.profilePic}
            cardColor={cardColors[2 % cardColors.length]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
