import React, { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import "../styles/Riskwarning.css";
import risk from "../images/riskpk.svg";
import Colors from "../components/Colors";

const Referals = () => {
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
          <h1 className="termH11"> Partnership</h1>
          <div className="termDiv2">
            <div className="riskDiv1">
              <div className="riskDiv2">
                <h2>Earn more by promoting bitvelar </h2>
                <h3>
                  We reward our partners with the highest and fastest payouts in
                  the industry.
                </h3>
                <img src={risk} />
              </div>
              <div className="riskDiv2">
                <h2>Earn up to 50% revenue share</h2>
                <h3>
                  Refer clients and enjoy lifetime commissions. The more they
                  trade, the more you earn No limit on the size of your
                  earnings.
                </h3>
                <h2>The world’s 1st data-driven Partner Program</h2>
                <h3>
                  We use the latest technology to ensure all revenue
                  calculations are precise, so you and all our partners get paid
                  fast. We give you access to all the tools and materials you
                  need to build a successful business, begin earning in a
                  high-paying industry, enjoy the freedom of earning
                  online,track your earnings in real time.
                  <br /> Be part of something greater by partnering with
                  bitvelar, you are a part of something greater, as we grow
                  together, grow alongside a trusted brand. Enjoy exclusive
                  deals and promos and become a certified Partner.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Referals;
