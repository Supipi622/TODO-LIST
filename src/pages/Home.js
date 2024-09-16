import React from "react";
import { useNavigate } from 'react-router-dom';
import TodoList from "../components/TodoList";
import '../style/pageStyle/Home.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image.png'; // Assuming the images are in src/assets

const Home = () => {
  const navigate = useNavigate();

  // Handle the click event for the button
  const handleClick = () => {
    navigate('/addtodo'); // Navigate to the add task page
  };

  return (
    <>
      <div className="home-container">
        <div className="content">
          <h1>Stay Organized and <br /> Boost Productivity</h1>
          <p>
            Welcome to our To-Do List application! Designed to help you stay on top of your tasks,
            this app provides a simple and intuitive interface to manage your daily activities efficiently.
            Whether you're juggling work projects, personal errands, or planning your next big adventure,
            our To-Do List app ensures you never miss a deadline. Create, update, and track your tasks
            seamlessly to boost your productivity and achieve your goals with ease. Get started today and experience the power of organized living!
          </p>
        </div>
        <div
          className="image"
          style={{ backgroundImage: `url(${image1})` }}
        ></div>
        {/* <div
          className="another-background-image"
          style={{ backgroundImage: `url(${image2})` }}
        ></div> */}
      </div>

      <TodoList />
    </>
  );
};

export default Home;
