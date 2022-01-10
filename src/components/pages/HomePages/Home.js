import React, { useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/footer";
import Landing from "../../pages/Landing";

const Home = () => {
  let token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} token={token} />
      <Landing />
      <Footer />
    </div>
  );
};

export default Home;
