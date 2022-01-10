import React from "react";
import styled from "styled-components";
import "../../css/index.css";
import "../../css/App.css";

const LandingStyle = styled.div`
  .main_container {
    display: flex;
    flex-flow: column nowrap;
  }
  .intro_container {
    display: flex;
    flex-flow: row nowrap;
  }
  .pricing_container {
    display: flex;
    flex-flow: column nowrap;
  }
  .pricing_card_container {
    display: flex;
    flex-flow: row nowrap;
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
      <div className="main_container">
        <div className="intro_container">
          <div>a description</div>
          <div>a video</div>
        </div>

        <div className="pricing_container">
          <h1>Pricing</h1>
          <p>Choose the most suitable subscription for your needs.</p>
          <div className="pricing_card_container">
            <div>card 1</div>
            <div>card 2</div>
            <div>card 3</div>
            <div>card 4</div>
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
