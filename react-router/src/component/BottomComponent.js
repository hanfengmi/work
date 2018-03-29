import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Topics from './Topics'

class BottomComponent extends Component {

    render(){
        return(
            <Router>
                <div>
                    <ul className="link">
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">关于</Link></li>
                        <li><Link to="/topics">主题</Link></li>
                    </ul>

                    <div style={{
                        height:'10px',
                        borderBottom:'1px solid #ccc',
                        marginBottom:'10px'
                    }}></div>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        )
    }
}

export default BottomComponent;