import React from "react";
import styled from "styled-components";
import Header from "../../common/Header";
import Sidebar from "../../pages/HomePages/Sidebar";

const HowStyled = styled.div`

.header-container {

display: block;


}

.header-container h1 {

display: flex;
margin-left: 40px;
margin-top: 40px;

}

.header-container p {

  display: flex;
  margin-left: 40px;
  margin-top: 10px;
  border-bottom: solid;
}

.info-container {
  
  margin-top: 30px;
  display: block;
  padding-inline-start: 40px;
  margin-left: 60px;
}

.bold {
  font-weight: bold;
}

.pb-3 {
  padding-bottom: 40px;
  margin-left: 0px;
  text-align: left;
}

`;
const HowItWorks = () => {
  return (
    <>
      <Header />
      <div className="global-body">
      <Sidebar />
      
      <HowStyled>
      <div className="header-container">
      <h1> How It Works </h1>

      <p>
      Ready to generate & cultivate more reviews?
      </p>
      </div>

      <div>

      <ul className="info-container">
      <li className="pb-3">
      <p>
      <span className="bold">You Join</span>...Of course, you'll need an account and to make some fast easy 
      setting choices. It's private and secure. We do not sell to third parties.
      </p>
      </li>

      <li className="pb-3">
      <span className="bold">Provide Minimal Details</span> Enter in bulk or individually your customer's name 
      and email, we'll do the rest. Don't worry you can test drive it for yourself.
      </li>

      <li className="pb-3">
      <p>
      <span className="bold">Customer Responds</span> Our software helps you get more customers to give you multiple reviews. Your customers 
      are guided through our secure proprietary process where in as few steps as possible they provide either private 
      feedback to you or public reviews to your favorite review sites. It's your choice.
      </p>
      </li>

      <li className="pb-3">
      <p>
      <span className="bold">Manage, Monitor & Enjoy</span> The software is supercharged with fun ways to track details and results. 
      Give it a try. You're going to love it!
      </p>
      </li>

      </ul>

      </div>
      </HowStyled>
      </div>
    </>
  );
};

export default HowItWorks;
