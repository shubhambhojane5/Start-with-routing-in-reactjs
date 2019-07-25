import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import page1Component from './App/page1Component';
import page2Component from './App/page2Component';
import page3Component from './App/page3Component';
import page4Component from './App/page4Component';
import page5Component from './App/page5Component';
import NavBarComponent from './App/navBarComponent';

const routing=(
    <Router>
        <div>
            <NavBarComponent></NavBarComponent>
            <Route exact path="/" component={App}></Route>
            <Route path="/page1" component={page1Component}></Route>
            <Route path="/page2" component={page2Component}></Route>
            <Route path="/page3" component={page3Component}></Route>
            <Route path="/page4" component={page4Component}></Route>
            <Route path="/page5" component={page5Component}></Route>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
