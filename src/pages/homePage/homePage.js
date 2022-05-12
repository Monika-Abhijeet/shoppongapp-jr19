import React from "react";
import { useSelector } from "react-redux";
import "./homePage.css"
import dogImage from "../../images/dog.jpeg";
function HomePage(props) {
  const isLogged = useSelector((state) => state.isLogged);
  if (!isLogged) {
    return <h1 style={{ color: "red" }}>Please Login to view this page</h1>;
  }
  return (
    <div>
      Home Page
      <img src={dogImage} />
    </div>
  );
}

export default HomePage;
