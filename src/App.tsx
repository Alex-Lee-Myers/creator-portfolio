import React from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './styles/GlobalStyle';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
//Router
import {Routes, Route } from "react-router-dom";
// import { RouteComponentProps } from '@reach/router';

const App: React.FunctionComponent = (): JSX.Element => {
  //? Example of React Router V6: https://typescript.tv/react/upgrade-to-react-router-v6/
  //?  2) https://github.com/Sevicode/react-router-vsix-app/blob/master/src/App.tsx



  return (
    <div className="App">

      <GlobalStyle />
      <Nav />

      <Routes>
        <Route path="/"  element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork/>} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

    </div>
  );
}

export default App;
