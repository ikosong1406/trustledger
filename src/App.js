import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import "./App.css";
import Colors from "./components/Colors";
import Landing from "./pages/Landing";
import Header1 from "./components/Header1";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Deposit from "./pages/Deposit";
import Withdrawal from "./pages/Withdrawal";
import Settings from "./pages/Settings";
import Accounts from "./pages/Accounts";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // const Layout = ({ children }) => (
  //   <>
  //     <Header />
  //     {children}
  //     <Footer />
  //   </>
  // );

  const Layout1 = ({ children }) => (
    <>
      <Header1 />
      {children}
      <Footer />
    </>
  );
  return (
    <div>
      <div>
        {isLoading ? (
          <div className="spinner-container">
            <Bars
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
          <>
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
                <Route path="/dashboard" element={<Layout />}>
                  <Route index element={<Main />} />
                  <Route path="main" element={<Main />} />
                  <Route path="deposit" element={<Deposit />} />
                  <Route path="withdrawal" element={<Withdrawal />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="accounts" element={<Accounts />} />
                </Route>
              </Routes>
            </Router>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
