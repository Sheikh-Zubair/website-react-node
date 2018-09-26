import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class LoginForm extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    formSubmit(event) {
        event.preventDefault();
        this.errorMessage();
        const user = {
            username: event.target.uname.value,
            password: event.target.psw.value
        }
        this.props.login(user);
    }
    errorMessage() {
        if (this.props.user === false) {
            document.querySelector('#errormsg').innerHTML = 'Username or Password is incorrect';
        }
        else {
            document.querySelector('#errormsg').innerHTML = '';
        }
    }
    render() {
        
        return (
                <div className="row" style={{height: "400px"}}>
                    <form onSubmit={this.formSubmit.bind(this)} className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="uname">Username</label>
                            <input className="form-control" type="text" name="uname" id="uname" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="psw">Password</label>
                            <input className="form-control" type="password" name="psw" id="psw" />
                        </div>
                        <div id="errormsg" className="text-danger"></div>
                        <input className="btn btn-default" type="submit" name="Submit"/>
                    </form>
                </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, actions)(LoginForm);