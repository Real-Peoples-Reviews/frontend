import React, { useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/footer";
import Dashboard from "../Dashboard";

const Home = () => {
  let token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} token={token} />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Home;
