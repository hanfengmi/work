import React, { Component } from 'react';

class Topic extends Component {
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div style={{
                width:'40%',
                height:'300px',
                margin:'0 auto',
                background:`${this.props.match.params.topicId}`
            }}>
                <h5>选择一个主题吧</h5>
            </div>
        )
    }
}

export default Topic;