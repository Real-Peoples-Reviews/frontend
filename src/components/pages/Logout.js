import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const { push } = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    push("/");
  }, [push]);

  return <div></div>;
};

export default Logout;
