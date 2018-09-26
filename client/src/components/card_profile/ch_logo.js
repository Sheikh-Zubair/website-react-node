import React, { Component } from 'react';
import { connect } from 'react-redux';

class Logo extends Component {
    logo(arg){
        let name = [...arg];
        return [name[0], name[1]];
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-1">
                    <div id="logo">
                        {this.logo(this.props.user.fname)}
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Logo);