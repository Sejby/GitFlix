import React from 'react';
import Header from './components/Header/Header';
import Showcase from './components/Showcase/Showcase';
import Loader from './components/Loader/Loader';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Loader />
      <Showcase />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
