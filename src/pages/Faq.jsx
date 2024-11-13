import React, { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";

const Faq = () => {
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
          <h1 className="termH11"> Frequently Asked Questions</h1>
          <div className="termDiv2">
            <div className="termDiv3">
              <h1>What is cryptocurrency?</h1>
              <h3>
                Cryptocurrency is a type of virtual currency that uses
                cryptography to secure transactions that are digitally recorded
                on a distributed ledger, such as a blockchain. A transaction
                involving cryptocurrency that is recorded on a distributed
                ledger is referred to as an “on-chain” transaction; a
                transaction that is not recorded on the distributed ledger is
                referred to as an “off-chain” transaction.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>How to log in to your account?</h1>
              <h3>
                Go to /login . In this window, enter your e-mail address,
                password, and captcha. Click the Login button. You logged in to
                your account. Now you can make a deposit or start trading. We
                also recommend you to log into your personal account and enable
                the two-factor authentication. More information can be found at
                the link: /about
              </h3>
            </div>
            <div className="termDiv3">
              <h1>How to register an account?</h1>
              <h3>
                Go to register. In this window, enter your e-mail address,
                password, password confirmation, captcha and agree to the Terms
                of Use. Click the Sign Up button. Welcome to the Exchange!
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Can I delete my account?</h1>
              <h3>
                This option is not available. You can block the account. To do
                this, you can create a corresponding ticket in the technical
                support, where you need to specify a valid e-mail as well as the
                KYC data. To create a ticket, press on the blue button of
                "Support" in the right down corner of the page.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>How to make a currency withdrawal on the exchange?</h1>
              <h3>
                Go to the Balance tab and click on the "Withdraw" next to the
                desired coin, enter the address and the amount.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>
                On what terms are the requests for withdrawal being processed?
              </h1>
              <h3>
                We use the Personal Information for the purposes indicated at
                After the identity verification, all applications will be made
                within 24 hours.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>How do I cancel a withdrawal request?</h1>
              <h3>
                This option is not available. You can still contact our support,
                we will do everything possible to help you solve the issue.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>How do I replenish my balance?</h1>
              <h3>
                Go to the Balance tab at the top of the page. To replenish your
                balance, click "Deposit" next to the desired coin.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>
                How long does it take to receive a response from the support
                team? How does it work?
              </h1>
              <h3>
                For the convenience of our users, we have a customer support
                service that works 7 days a week and 24 hours a day without
                breaks and holidays. If you have any questions, wishes or
                suggestions, our specialists are always ready to help you with
                any problem, and also to hear your suggestions for improving the
                service. We will do our best to reply ASAP.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Can I connect a bank account to my account?</h1>
              <h3>
                Unfortunately, this option is currently unavailable on our
                exchange.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>How to enable the two-factor authentication?</h1>
              <h3>
                Download the Google Authenticator application from Play Market
                or AppStore. Go to your Account (to do this you need to click on
                your email in the top right corner) and then choose the Security
                section. Scan the QR code in the downloaded application or enter
                the number manually. After the "Bitvevo" tab appears in the app,
                enter the authentication code in the “Please Enter Key” field.
                All set, you enabled the two-factor authentication!
              </h3>
            </div>
            <div className="termDiv3">
              <h1>
                What if I lost the code / key to two-factor authentication?
              </h1>
              <h3>
                You need to provide KYC data, account login, as well as data of
                the latest currency deposits and withdrawals and send this
                information to support.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Is it safe to use Bitvelar exchange?</h1>
              <h3>
                Yes! The main priority in our work is the security of our
                clients personal data and safety. We use advanced methods and
                technologies in the field of security. We implemented two-factor
                authentication technology to protect your accounts, as well as
                Anti Phishing, which helps to ensure the reliability of our
                exchange. More than 95% of all currency is stored on cold
                wallets. WAF (Web Application Firewall) - a protective screen of
                a Web application that detects and blocks hacker attacks.
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faq;
