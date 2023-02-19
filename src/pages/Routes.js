import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailPage from './DetailPage';

const LandingPage = lazy(() => import('./LandingPage')) 
const Headers = lazy(() => import('../components/header/Header'))

const Routes = () => {

    return (
      <Suspense fallback={<div>....loading</div>}>
        <Headers />
        <div style={{ padding: '10em 12em'}}>
          <Router>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/detail/:id" component={DetailPage} />
          </Router>
        </div>
      </Suspense>
    );
}

export default Routes
