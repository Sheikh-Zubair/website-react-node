import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/index';
import { fetchUser } from '../../actions/index';

class NavBar extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    logout() {
        this.props.logoutUser();
    }
    logIn_signUp() {
            if(this.props.user){
                return (
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">{this.props.user.name}</Link></li>
                            <li><Link to="/books" >Books</Link></li>
                            <li><Link to="/authors" >Authors</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/api/logout"><div className="glyphicon glyphicon-log-out"></div> Logout</a></li>
                        </ul>
                    </div>
                );
            }else if(this.props.user === null){
                return <h5>Loading...</h5>
            }
            return <h4 style={{margin: "10px"}}>Please Login to continue</h4>
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    {this.logIn_signUp()}
                </nav>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { logoutUser, fetchUser })(NavBar);

/*
<li><div style={{margin: "8px"}}><div className="glyphicon glyphicon-user"></div><Link to="/signup" > Sign Up</Link></div></li>
*/