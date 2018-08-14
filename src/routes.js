import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About/about';
import NotFound from './components/NotFound/notfound';
import MaterialUIExam from './components/MaterialUIExam/materialUiExam'
import TestComponent from './components/TestComponent/testComponent'

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/material" component={MaterialUIExam} />
        <Route path="/test" component={TestComponent} />
        <Route path="*" component={NotFound} />
    </Router>
);

export default Routes;