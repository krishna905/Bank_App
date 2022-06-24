import React from "react";

const Home12 = ({ signOut, mem }) => {
  console.log(mem);
  return (
    <div className="wrapper">
      <h1 className="main-heading">Thank you for confirming OTP, you will get a call from our agent . {mem.phoneNumber}</h1>
      <button className="main-button" id="signOut" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Home12;