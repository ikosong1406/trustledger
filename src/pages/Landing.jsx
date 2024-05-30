import React, { useState, useEffect } from "react";
import "../styles/Landing.css";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import Colors from "../components/Colors";
import { motion } from "framer-motion";
import img from "../images/img.png";
import img2 from "../images/security.png";
import chart from "../images/barchart.png";
import set from "../images/set.png";
import magnification from "../images/magnification.png";
import data from "../images/data.png";
import phone from "../images/phone.png";
import wallet from "../images/wallet.png";
import shield from "../images/shield.png";
import pics1 from "../images/pics1.jpg";
import pics2 from "../images/pics2.jpg";
import pics3 from "../images/pics3.jpg";

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const Landing = () => {
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
          <Bars
            height="80"
            width="80"
            color={Colors.violet}
            ariaLabel="bars-loading"
            visible={true}
          />
        </div>
      ) : (
        <div className="landMain">
          <motion.div
            className="landDiv1"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="landDiv11">
              <h1>
                Secure Value With Crypto Coins Tied To Real-world Gold Assets.
              </h1>
              <h3>
                Don't wait, start investing today for a stable financial
                tomorrow
              </h3>
              <Link to="/register" className="landDiv1Btn">
                Get Started
              </Link>
            </div>
            <img src={img} alt="Crypto" />
          </motion.div>

          <motion.div
            className="landDiv2"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="landDiv11a">
              <div className="landDiv11a1">
                <img src={pics1} className="m" alt="Pic 1" />
                <img src={pics2} className="mm" alt="Pic 2" />
              </div>
              <div className="landDiv11a1b">
                <img src={pics3} className="m" alt="Pic 3" />
              </div>
            </div>
            <div className="landDiv11b">
              <h4>WHAT IS TOKEN CRYPTO</h4>
              <h2>
                We've built a platform that secures valuable assets and Gold
                tokenized crypto coin
              </h2>
              <div className="landDiv213">
                <div className="landDiv2131">
                  <div className="landDiv2132">
                    <div className="landDiv21321">
                      <h3 className="date">Decentralized Platform</h3>
                      <h4>
                        The platform helps investors to easily secure their
                        crypto and fiat assets
                      </h4>
                    </div>
                    <div className="landDiv21321b">
                      <h3 className="date">Crowd Wisdom</h3>
                      <h4>
                        The process of taking into account the collective
                        opinion of a group
                      </h4>
                    </div>
                  </div>
                  <div className="landDiv2133"></div>
                  <div className="landDiv2132">
                    <div className="landDiv21321c">
                      <h3 className="date">Reward Mechanism</h3>
                      <h4>The system pays a bonus for excellent individuals</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="landDiv4"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="landDiv41">
              <h4>WHY CHOOSE OUR TOKEN</h4>
              <div className="landDiv411">
                <div className="landDiv4111">
                  <img src={phone} alt="" className="ic" />
                  <h3>Mobile Payment make easy</h3>
                  <p>You can use a mobile device to pay with simple steps</p>
                </div>
                <div className="landDiv4111">
                  <img src={wallet} alt="" className="ic" />
                  <h3>Lifetime free transaction</h3>
                  <p>You can buy tokens without using a transaction fee</p>
                </div>
                <div className="landDiv4111">
                  <img src={shield} alt="" className="ic" />
                  <h3>Protect the identity</h3>
                  <p>Use a mobile device to pay with simple steps</p>
                </div>
              </div>
            </div>
            <div className="landDiv5">
              <div className="landDiv51">
                <h1>24/7 Cybersecurity Operation Center</h1>
                <h3>
                  Don't wait, start investing today for a stable financial
                  tomorrow
                </h3>
                <Link to="/register" className="landDiv1Btn">
                  Contact us
                </Link>
              </div>
              <img src={img2} alt="Cybersecurity" />
            </div>
          </motion.div>

          <motion.div
            className="landDiv6"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="landDiv61">
              <h2>How it Works</h2>
              <h4>It's Quite Easy to Start Using Our Platform</h4>
            </div>
            <div className="landDiv62">
              <div className="landDiv621">
                <img src={chart} alt="" />
                <h3>Register New Account</h3>
                <h4>
                  Registration is a very easy process. Follow step by step and
                  sign in
                </h4>
              </div>
              <div className="landDiv621">
                <img src={set} alt="" />
                <h3>Setup Account Info</h3>
                <h4>
                  Our system prioritizes security, featuring a secure
                  development lifecycle
                </h4>
              </div>
              <div className="landDiv621">
                <img src={magnification} alt="" />
                <h3>Start Buying and Selling</h3>
                <h4>Earn money on our platform safely and legally</h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="landDiv7"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="landDiv71">
              <h1>The World's 1st Security Platforms That Offers Rewards</h1>
              <h3>
                The platform that helps investors to make easy purchases and
                sell their tokens
              </h3>
              <img src={data} alt="Data" />
            </div>
            <div className="landDiv72">
              <div className="landDiv721">
                <h3>Pre-sale is Live Now</h3>
                <h4>Ends In:</h4>
                <div className="landDiv7211">
                  <div className="x">
                    <h2 className="landDiv72111">30</h2>
                    <h4>Days</h4>
                  </div>
                  <div className="x">
                    <h2 className="landDiv72111">23</h2>
                    <h4>Hours</h4>
                  </div>
                  <div className="x">
                    <h2 className="landDiv72111">45</h2>
                    <h4>Minutes</h4>
                  </div>
                  <div className="x">
                    <h2 className="landDiv72111">09</h2>
                    <h4>Seconds</h4>
                  </div>
                </div>
                <Link to="/register" className="landDiv1Btn">
                  Purchase Token
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Landing;
