import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Topic from './Topic'
import TopicInit from './Topic'


class Topics extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h3>什么主题</h3>
                <ul className="topics-link">
                    <li><Link to={`${this.props.match.url}/red`}>点击会红</Link></li>
                    <li><Link to={`${this.props.match.url}/green`}>点击会绿</Link></li>
                    <li><Link to={`${this.props.match.url}/yellow`}>点击会黄</Link></li>
                </ul>

                <div style={{
                    width:'50%',
                    height:'10px',
                    borderBottom:'1px solid #ccc',
                    margin:'0 auto 10px'
                }}></div>

                <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
                <Route exact path={`${this.props.match.url}`} component={TopicInit} />
            </div>
        )
    }
}

export default Topics;