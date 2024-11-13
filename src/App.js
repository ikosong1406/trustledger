import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import "./App.css";
import Colors from "./components/Colors";
import Landing from "./pages/Landing";
import Header1 from "./components/Header1";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Transaction from "./pages/Transaction";
import Secure from "./pages/Secure";
import Stake from "./pages/Stake";
import Partner from "./pages/Partner";
import Accounts from "./pages/Accounts";
import Privacy from "./pages/Privacypolicy";
import Risk from "./pages/Riskwarning";
import Terms from "./pages/TermsofUse";
import Contact from "./pages/Contact";
import Fee from "./pages/Fee";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Referals from "./pages/Referals";
import Market from "./pages/Market";
import UserTransaction from "./pages/UserTransaction";
import AdminLayout from "./components/AdminLayout";
import AdminHome from "./pages/AdminHome";
import AdminTransact from "./pages/AdminTransact";
import AdminMessage from "./pages/AdminMessage";
import AdminPayment from "./pages/AdminPayment";
import AdminUsers from "./pages/AdminUsers";
import AdminUserdetails from "./pages/AdminUserdetails";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const Layout1 = ({ children }) => (
    <>
      <Header1 />
      {children}
      <Footer />
    </>
  );
  return (
    <div>
      {isLoading ? (
        <div className="spinner-container">
          <ThreeCircles
            height="80"
            width="80"
            color={Colors.violet}
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout1>
                    <Landing />
                  </Layout1>
                }
              />
              <Route
                path="/login"
                element={
                  <Layout1>
                    <Login />
                  </Layout1>
                }
              />
              <Route
                path="/register"
                element={
                  <Layout1>
                    <Register />
                  </Layout1>
                }
              />
              <Route
                path="/privacy"
                element={
                  <Layout1>
                    <Privacy />
                  </Layout1>
                }
              />
              <Route
                path="/termsofuse"
                element={
                  <Layout1>
                    <Terms />
                  </Layout1>
                }
              />
              <Route
                path="/risk"
                element={
                  <Layout1>
                    <Risk />
                  </Layout1>
                }
              />
              <Route
                path="/market"
                element={
                  <Layout1>
                    <Market />
                  </Layout1>
                }
              />
              <Route
                path="/contact"
                element={
                  <Layout1>
                    <Contact />
                  </Layout1>
                }
              />
              <Route
                path="/fee"
                element={
                  <Layout1>
                    <Fee />
                  </Layout1>
                }
              />
              <Route
                path="/about"
                element={
                  <Layout1>
                    <About />
                  </Layout1>
                }
              />
              <Route
                path="/faq"
                element={
                  <Layout1>
                    <Faq />
                  </Layout1>
                }
              />
              <Route
                path="/referal"
                element={
                  <Layout1>
                    <Referals />
                  </Layout1>
                }
              />
              <Route path="/dashboard" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="main" element={<Main />} />
                <Route path="transaction" element={<Transaction />} />
                <Route path="secure" element={<Secure />} />
                <Route path="stake" element={<Stake />} />
                <Route path="usertransaction" element={<UserTransaction />} />
                <Route path="partner" element={<Partner />} />
                <Route path="accounts" element={<Accounts />} />
              </Route>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminHome />} />
                <Route path="adminHome" element={<AdminHome />} />
                <Route path="adminUsers" element={<AdminUsers />} />
                <Route path="adminUserdetails" element={<AdminUserdetails />} />
                <Route path="adminTransact" element={<AdminTransact />} />
                <Route path="adminMessage" element={<AdminMessage />} />
                <Route path="adminPayment" element={<AdminPayment />} />
              </Route>
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;
