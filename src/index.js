import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import ViewPost from './Components/ViewPostComponent';
import TagFiltered from './Components/TagFilteredComponent';
import Sidebar from './Components/SidebarComponent';
import Header from './Components/HeaderComponent';
import SearchBox from './Components/SearchBoxComponent';

// const {Provider, Consumer} = React.createContext()
ReactDOM.render(
    <Router>
        <div>
        
            <Header/>
            <div className="container-fluid mt-3">
                <div className="row">
                    <Sidebar />
                    <Route path='/' exact strict component={App} />
                    <Route path='/articles/view/:slug' exact strict component={ViewPost} />
                    <Route path='/article/tags/:id' exact strict component={TagFiltered} />
                    <Route path='/article/categories/:id' exact strict  component={TagFiltered} />
                </div>
            </div>
        </div>
    </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
