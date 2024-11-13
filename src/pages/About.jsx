import React, { useState, useEffect, useRef } from "react";
import { ThreeCircles } from "react-loader-spinner";
import "../styles/Riskwarning.css";
import risk from "../images/about.png";
import Colors from "../components/Colors";
import { IoMdStar } from "react-icons/io";

const About = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="spinner-container">
          <ThreeCircles
            height="80"
            width="80"
            color={Colors.violet}
            ariaLabel="bars-loading"
            visible={true}
          />
        </div>
      ) : (
        <div className="termDiv1">
          <h1 className="termH11"> About Us</h1>
          <div className="termDiv2">
            <div className="riskDiv1">
              <div className="riskDiv2">
                <h2>About Company</h2>
                <h3>
                  Our company begins its history from June 2018, when it was
                  developed. Recognizing the importance of Bitcoin from the
                  onset, and understanding that the exchange is the most
                  critical part of the cryptocurrency ecosystem, Willard Chapman
                  founded bitvelar to give people the means to quickly and
                  securely invest in the space. Since then, the company has
                  grown by leaps and bounds with hundreds of employees spanning
                  the globe. We’re a diverse group of thinkers and doers that
                  are dedicated to making cryptocurrency available and
                  accessible to the world and enabling people from all walks of
                  life to invest in their independence. We believe that everyone
                  should have the freedom to earn, hold, spend, share and give
                  their money - no matter who you are or where you come from.
                </h3>
                <img src={risk} />
              </div>
              <h2 style={{ textAlign: "center" }}>What We do</h2>
              <div className="riskDiv2">
                <h2>
                  <span style={{ marginTop: 50 }}>
                    <IoMdStar
                      style={{
                        alignSelf: "center",
                        fontSize: 20,
                        color: Colors.indigo,
                      }}
                    />
                  </span>{" "}
                  Supporting institutions
                </h2>
                <h3>
                  From over-the-counter trading to personalized white-glove
                  account management, bitvelar is the premier cryptocurrency
                  investing solution for institutions of all sizes. We offer
                  exceptional liquidity and competitive pricing for all our
                  markets so you can achieve your investment goals quickly and
                  confidently.
                </h3>
                <h2>
                  <span style={{ marginTop: 50 }}>
                    <IoMdStar
                      style={{
                        alignSelf: "center",
                        fontSize: 20,
                        color: Colors.indigo,
                      }}
                    />
                  </span>{" "}
                  Empowering investors
                </h2>
                <h3>
                  Whether you’re an advanced trader or a crypto-beginner,
                  bitvevo gives you the power to chart your own financial
                  course. Our exchange has an ever-growing number of
                  cryptocurrency pairs for you to invest in and a slew of tools
                  and features for you to leverage as you grow your portfolio.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
