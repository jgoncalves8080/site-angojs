import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Footer } from './components';

import Routes from './routes';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
