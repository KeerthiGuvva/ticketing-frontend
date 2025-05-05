import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./styles/Sidebar.css";
import styles from "./styles/App.module.css";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import ChatSupport from "./styles/ChatSupport.module.css";
import Analytics from "./pages/Analytics";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ChatWidget from "./componenets/ChatWidget.css"

const App = () => {
  return (
    <Router>
      <div className={styles.appLayout || "app-layout"}>
        <Navbar />
        <div className={styles.mainContent || "main-content"}>
          <Sidebar />
          <div className={styles.pageContainer || "page-container"}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/chat" element={<ChatSupport />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;



