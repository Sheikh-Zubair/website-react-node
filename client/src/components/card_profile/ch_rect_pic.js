import React, { Component } from 'react';

export default class RectPic extends Component {
    render () {
        return (
            <div id="pic">
                <img src={this.props} alt={this.props} width="40" height="40"/>
            </div>
        );
    }
}

