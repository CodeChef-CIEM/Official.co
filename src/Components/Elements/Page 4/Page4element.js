import React, { useEffect, useState } from "react";
import "./style.css";

const Page4element = ({ img, role, name, bottom, left, connect_link }) => {
  const [mobileScreen, setMobileScreen] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 786) {
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  }, []);

  return (
    <div
      className="p4-el-root"
      style={
        mobileScreen
          ? { position: "relative" }
          : {
              position: "absolute",
              bottom: bottom,
              left: left,
            }
      }
    >
      {" "}
      <div className="backface-layout">
        <div className="name-box">
          <p className="p4-el-name">{name}</p>
          <p className="p4-el-role"> {role}</p>
          <button
            className="p4-el-connect-button"
            onClick={(e) => {
              e.preventDefault();
              window.open(connect_link);
            }}
          >
            Connect
          </button>
        </div>
      </div>
      <img className="p4-el-img" src={img} alt="person" />
    </div>
  );
};

export default Page4element;
