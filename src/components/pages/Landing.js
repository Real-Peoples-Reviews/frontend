import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../css/index.css";
import "../../css/App.css";
import placeHolder from "../../assets/images/logos/Logo_1.PNG";
import Header from "../common/Header";

const LandingStyle = styled.div`
  .pic {
    width: 50vw;
    height: 50vh;
    background-image: url(${placeHolder});
    background-size: cover;
    background-position: center;
  }
  .main_container {
    display: flex;
    flex-flow: column nowrap;
  }
  .intro_container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .intro_content {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    text-align: left;
    margin: 5%;
  }
  .pricing_container {
    display: flex;
    flex-flow: column nowrap;
  }
  .pricing_card_container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    border: 1px solid red;
  }
  .features_container {
    display: flex;
    flex-flow: column nowrap;
  }
  .feature_card_container {
    display: flex;
    flex-flow: row nowrap;
  }
  .action_container {
  }
`;

const Landing = () => {
  return (
    <LandingStyle>
      <Header />
      <div className="main_container">
        <div className="intro_container">
          <div className="intro_content">
            <h1>More Real Reviews</h1>
            <h1>Means New Revenues</h1>
            <p>
              Welcome to easy to use software that automates collecting new
              genuine reviews where you think matters most. Designed for Owners,
              Managers, Marketers, Social Media Experts, Sales Staff and more.
            </p>
            <Link to="/signup">Get Started Today</Link>
          </div>
          <div className="pic"></div>
        </div>

        <div className="pricing_container">
          <h1>Pricing</h1>
          <p>Choose the most suitable subscription for your needs.</p>
          <div className="pricing_card_container">
            <div>card 1</div>
            <div>card 2</div>
          </div>
        </div>

        <div className="features_container">
          <h1>Features</h1>
          <p>
            We specialize in helping you collect reviews to maintain ratings and
            reputation.
          </p>
          <div className="feature_card_container">
            <div>card 1</div>
            <div>card 2</div>
            <div>card 3</div>
            <div>card 4</div>
          </div>
          <div>button</div>
        </div>
        <div className="action_container">Ready to get started?</div>
      </div>
    </LandingStyle>
  );
};

export default Landing;
