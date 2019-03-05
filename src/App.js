import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';



const App = () => {
    return (
       <div className='app-wrapper'>
          <div className='head'>
           <Header />
           </div>
           <div className='cont'>
           <Content />
           </div>
           <div className='left'>
           <LeftSidebar />
           </div>
           <div className='right'>
           <RightSidebar />
           </div>
           <div className='foot'>
           <Footer />
           </div>
       </div>
    );

}

export default App;