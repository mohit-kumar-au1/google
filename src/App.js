import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ActionButton from "./components/ActionButton/ActionButton";
import "./App.scss";
import InputBox from "./components/InputBox/InputBox";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="main-wrapper">
        <div className="main-content text-center">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="google-logo"
          />
          <InputBox />
          <ActionButton />
          <div className="language-wrapper">
            <small>
              <span>Google offered in:</span>
              <a href="#">हिन्दी</a>
              <a href="#">বাংলা</a>
              <a href="#">తెలుగు</a>
              <a href="#">मराठी</a>
              <a href="#">தமிழ்</a>
              <a href="#">ગુજરાતી</a>
              <a href="#">ಕನ್ನಡ</a>
              <a href="#">മലയാളം</a>
              <a href="#">ਪੰਜਾਬੀ</a>
            </small>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
