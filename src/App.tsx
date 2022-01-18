import React from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './styles/GlobalStyle';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import ErrorPage from './pages/ErrorPage';
//Router
import {Routes, Route, Outlet } from "react-router-dom";
// import { RouteComponentProps } from '@reach/router';

const App: React.FunctionComponent = (): JSX.Element => {
  //! Examples of React Router V6 in TypeScript: 
  //?  1) https://typescript.tv/react/upgrade-to-react-router-v6/
  //?  2) https://github.com/Sevicode/react-router-vsix-app/blob/master/src/App.tsx
  // Trying to fix this issue: "Its return type 'void' is not a valid JSX element for <MovieDetail />"

  return (
    <div className="App">

      <GlobalStyle />
      <Nav />

      <Routes>
        <Route path="/"  element={<AboutUs />} />
        <Route path="/work" element={<OurWork/>} />
        <Route path="/work/:id" element={<MovieDetail />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<ErrorPage />} />
        <Outlet />
      </Routes>

    </div>
  );
}

export default App;
