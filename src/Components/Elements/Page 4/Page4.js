import React, { useEffect, useState } from "react";
import Element from "./Page4element";
import Abir from "../../../images/Abir.png";
import Debgandhar from "../../../images/Debgandhar.png";
import Deepak from "../../../images/Deepak.png";
import Suchinta from "../../../images/Suchinta.png";
import "./style.css";

const Page4 = () => {
  const [mobileScreen, setMobileScreen] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 786) {
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  }, []);

  return (
    <div className="page-4-root">
      <div className="page-4-title-box">
        <p className="page-4-title">Meet Core</p>
        <div
          className="under-line-2"
          style={mobileScreen ? { width: "30%" } : { width: "50%" }}
        ></div>
      </div>
      <Element
        img={Abir}
        bottom={"10%"}
        left={"10%"}
        name={"Abir Bhattatcharya"}
        role={"Team Lead(President)"}
        connect_link={"https://abirbhattacharya82.github.io/"}
      />
      <Element
        img={Debgandhar}
        bottom={"20%"}
        left={"30%"}
        name={"Debgandhar Ghosh"}
        role={"Media And Outreach Lead"}
        connect_link={"https://www.linkedin.com/in/debgandhar-ghosh-1515281b4/"}
      />
      <Element
        img={Suchinta}
        bottom={"30%"}
        left={"50%"}
        name={"Suchinta Chanda"}
        role={"Events Management Lead"}
        connect_link={"https://www.linkedin.com/in/suchinta-chanda-234397199/"}
      />
      <Element
        img={Deepak}
        bottom={"40%"}
        left={"70%"}
        name={"Deepak Gupta"}
        role={"Programming Lead"}
        connect_link={"https://www.linkedin.com/in/deepak-gupta-051331197/"}
      />
      <div className="executive-box">
        <button
          className="exec-button"
          onClick={() => alert("Feature Not Implemented Yet!")}
        >
          Meet our Team
        </button>
      </div>
    </div>
  );
};

export default Page4;
