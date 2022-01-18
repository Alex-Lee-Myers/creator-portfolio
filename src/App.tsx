import React from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './styles/GlobalStyle';
import Nav from './components/Nav';

const App: React.FunctionComponent = () => {




  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AboutUs />
    </div>
  );
}

export default App;
