import React, { useState } from 'react';
import './App.css';
import SideBar from './components/Sidebar/SideBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
    console.log("hamburger clicked");
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} />
      <Footer />
    </>
  );
}

export default App;
