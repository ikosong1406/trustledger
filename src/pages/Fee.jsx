import React, { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import "../styles/Riskwarning.css";
import changelly from "../images/changelly.webp";
import bitpay from "../images/bitpay-min.webp";
import ramp from "../images/ramp-min.webp";
import moonpay from "../images/moonpay-min.webp";
import transak from "../images/transak-min.webp";
import simplex from "../images/simplex.webp";
import mercuryo from "../images/mercuryo.webp";
import coingate from "../images/coingate.webp";
import banxa from "../images/banxa-min.webp";
import phemex from "../images/phemex.webp";
import Colors from "../components/Colors";
import { NavLink } from "react-router-dom";

const Fee = () => {
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
          <h1 className="termH11"> Buy Crypto</h1>
          <div className="termDiv2">
            <div className="riskDiv1">
              <div className="riskDiv2">
                <div>
                  <img src={changelly} style={{ width: 100 }} />
                  <h3 style={{ marginTop: -0 }}>
                    Changelly is an ecosystem of products that allows you to
                    exchange, buy, trade, and sell cryptocurrencies and also
                    earn free crypto with our affiliate program.
                  </h3>
                  <NavLink
                    to="https://changelly.com/"
                    className="signBtn"
                    style={{ marginLeft: -5 }}
                  >
                    Go to Changelly
                  </NavLink>
                </div>
                <div style={{ marginTop: 40 }}>
                  <img src={bitpay} style={{ width: 100 }} />
                  <h3 style={{ marginTop: -0 }}>
                    Buy crypto with a credit card, debit card, Apple Pay or
                    Google Pay. Delivered quickly to any wallet, no hidden fees
                    or third-party custody. Buy online or in the BitPay app.
                  </h3>
                  <NavLink
                    to="https://bitpay.com/"
                    className="signBtn"
                    style={{ marginLeft: -5 }}
                  >
                    Go to Bitpay
                  </NavLink>
                </div>
                <div style={{ marginTop: 40 }}>
                  <img src={ramp} style={{ width: 100 }} />
                  <h3 style={{ marginTop: -0 }}>
                    Ramp is a global financial technology company building
                    solutions that connect the crypto economy with today’s
                    financial infrastructure.
                  </h3>
                  <NavLink
                    to="https://ramp.network/"
                    className="signBtn"
                    style={{ marginLeft: -5 }}
                  >
                    Go to Ramp
                  </NavLink>
                </div>
                <div style={{ marginTop: 40 }}>
                  <img src={moonpay} style={{ width: 100 }} />
                  <h3 style={{ marginTop: -0 }}>
                    MoonPay offers a fast and simple way to buy and sell
                    cryptocurrencies. Buy crypto with credit card, bank
                    transfers or Apple Pay today.
                  </h3>
                  <NavLink
                    to="https://www.moonpay.com/"
                    className="signBtn"
                    style={{ marginLeft: -5 }}
                  >
                    Go to MoonPay
                  </NavLink>
                </div>
                <div style={{ marginTop: 40 }}>
                  <img src={transak} style={{ width: 100 }} />
                  <h3 style={{ marginTop: -0 }}>
                    Transak is a leading Web3 onboarding infrastructure
                    provider. Its API-driven solutions enable web3 platforms to
                    onboard users to 130+ crypto assets from 150+ countries,
                    abstracting away the complexity of user KYC, risk monitoring
                    & compliance, payment methods and customer support.
                  </h3>
                  <NavLink
                    to="https://transak.com/"
                    className="signBtn"
                    style={{ marginLeft: -5 }}
                  >
                    Go to Transak
                  </NavLink>
                </div>
              </div>
              <div className="riskDiv2">
                <div style={{ marginTop: 40 }}>
                  <img src={simplex} style={{ width: 100 }} />
                  <h3 style={{ marginTop: -0 }}>
                    Simplex by Nuvei is empowering the crypto industry with a
                    full fiat infrastructure. We process crypto-to-credit card
                    payments with a 100% guarantee – in case of a fraud
                    chargeback, the merchant gets paid by us.
                  </h3>
                  <NavLink
                    to="https://buy.simplex.com/"
                    className="signBtn"
                    style={{ marginLeft: -5 }}
                  >
                    Go to Simplex
                  </NavLink>
                </div>
                <div style={{ marginTop: 40 }}>
                  <img src={mercuryo} style={{ width: 100 }} />
                  <h3 style={{ marginTop: -0 }}>
                    A custodial wallet with built-in crypto on-ramp
                    functionality. Designed to manage your crypto just like you
                    do with fiat: buy, sell, hold, and spend a wide range of
                    coins.
                  </h3>
                  <NavLink
                    to="https://mercuryo.io/"
                    className="signBtn"
                    style={{ marginLeft: -5 }}
                  >
                    Go to Mercuryo
                  </NavLink>
                </div>
                <div style={{ marginTop: 40 }}>
                  <img src={coingate} style={{ width: 100 }} />
                  <h3 style={{ marginTop: -0 }}>
                    CoinGate is a Lithuanian-based fintech company founded in
                    2014. The payment gateway offers cryptocurrency payment
                    processing services for businesses of any sizes.
                  </h3>
                  <NavLink
                    to="https://coingate.com/"
                    className="signBtn"
                    style={{ marginLeft: -5 }}
                  >
                    Go to CoinGate
                  </NavLink>
                </div>
                <div style={{ marginTop: 40 }}>
                  <img src={banxa} style={{ width: 100 }} />
                  <h3 style={{ marginTop: -0 }}>
                    Banxa is the leading global Web3 on and off-ramp solution
                    Crypto Buy. Our mission is to accelerate the world to Web3
                    and beyond.
                  </h3>
                  <NavLink
                    to="https://banxa.com/"
                    className="signBtn"
                    style={{ marginLeft: -5 }}
                  >
                    Go to Banxa
                  </NavLink>
                </div>
                <div style={{ marginTop: 40 }}>
                  <img src={phemex} style={{ width: 100 }} />
                  <h3 style={{ marginTop: -0 }}>
                    Phemex operates as a crypto derivatives trading platform.
                    Phemex is a professional and trustworthy global
                    cryptocurrency derivatives exchange. We offer Bitcoin,
                    Ethereum, Ripple, and Chainlink perpetual contracts, with up
                    to 100x leverage.
                  </h3>
                  <NavLink
                    to="https://phemex.com/"
                    className="signBtn"
                    style={{ marginLeft: -5 }}
                  >
                    Go to Phemex
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fee;
