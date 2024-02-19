// App.js
import React, { useState } from "react";
import MyComponent from './MyComponent';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Profile from "./Profile";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "Alice",
      message: "This is my first post!",
      timestamp: new Date(),
      comments: ["Great post!", "Welcome to the community!"],
      likes: 10,
    },
    {
      id: 2,
      username: "Bob",
      message: "I love React!",
      timestamp: new Date(),
      comments: ["Me too!"],
      likes: 15,
    },
    {
      id: 3,
      username: "Charlie",
      message: "Just finished my React project.",
      timestamp: new Date(),
      comments: ["Awesome work!"],
      likes: 8,
    },
    {
      id: 4,
      username: "Dave",
      message: "React is so much fun!",
      timestamp: new Date(),
      comments: ["Absolutely!", "Keep enjoying!"],
      likes: 12,
    },
    // Add more posts as needed
  ]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



// // App.js
// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import Home from "./Home";
// import Profile from "./Profile";
// import Register from "./Register";
// import Login from "./Login";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       username: "Alice",
//       message: "This is my first post!",
//       timestamp: new Date(),
//       comments: ["Great post!", "Welcome to the community!"],
//       likes: 10,
//     },
//     {
//       id: 2,
//       username: "Bob",
//       message: "I love React!",
//       timestamp: new Date(),
//       comments: ["Me too!"],
//       likes: 15,
//     },
//     {
//       id: 3,
//       username: "Charlie",
//       message: "Just finished my React project.",
//       timestamp: new Date(),
//       comments: ["Awesome work!"],
//       likes: 8,
//     },
//     {
//       id: 4,
//       username: "Dave",
//       message: "React is so much fun!",
//       timestamp: new Date(),
//       comments: ["Absolutely!", "Keep enjoying!"],
//       likes: 12,
//     },
//     // Add more posts as needed
//   ]);

//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home posts={posts} />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
