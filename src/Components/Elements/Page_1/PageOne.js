import React, { useEffect, useState } from "react";
import webElement4 from "../../../images/webEl5.jpg";
import hello from "../../../images/hello.mp4";
import "./style.css";
import Appbar from "../Appbar/Appbar";

const PageOne = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      setToggle((prevState) => !prevState);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [toggle]);

  return (
    <div className="page-one-root">
      <div className="page-one-container">
        <Appbar />
        <div className="title-box">
          {toggle && <p className="title-zero">CODE CHEF</p>}
          {toggle ? (
            <>
              <p className="title-one" style={{ marginBottom: 0 }}>
                {" "}
                Ciem Chapter
              </p>
              <p
                className="title-one"
                style={{ marginTop: 0, fontSize: "1.0rem" }}
              >
                The Official Codechef Campus Chapter of <br /> C.I.E.M{" "}
              </p>
            </>
          ) : (
            <>
              <p className="title-zero">Our Aim:</p>
              <p className="title-two">
                {" "}
                The mission of our Chapter is to build a robust Competitive
                <br />
                Programming culture on campus!
              </p>
            </>
          )}
        </div>

        <section className="page-one-body">
          <div className="page-one-web-element-container">
            {toggle ? (
              <video
                height={500}
                width={800}
                className="page-one-web-element"
                autoPlay
                muted
                loop={true}
              >
                <source src={hello} type="video/mp4" />
              </video>
            ) : (
              <img
                className="page-one-web-element"
                src={webElement4}
                alt="web element"
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PageOne;
