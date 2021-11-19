import React, { Suspense } from 'react';
import './style.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainContainer from '../pages/mainContainer';
import Login from '../pages/login';
import Home from '../pages/home';

const MainRoutes = () => {
  return (
    <Router>
      <Suspense>
        <MainContainer>
          <Routes>
            <Route path="/" exact element={<Login />}/>
            <Route path="/login" exact element={<Login />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/business" exact element={<Home />} />
            <Route path="/navigate" exact element={<Home />} />
            <Route path="/notifications" exact element={<Home />} />
            <Route path="/settings" exact element={<Home />} />
          </Routes>
        </MainContainer>
      </Suspense>
    </Router>
  )
}

export default MainRoutes;
