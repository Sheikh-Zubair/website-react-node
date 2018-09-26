import React, { Component } from 'react';
import { addUser } from '../../actions/index';
import { connect } from 'react-redux';

class LoginForm extends Component {
    componentDidUpdate(){
        this.errorMessage();
    }
    formSubmit(event) {
        event.preventDefault();
        const user = {
            books: [event.target.book1.value, event.target.book2.value],
            firstname: event.target.firstname.value,
            fname: event.target.fname.value,
            password: event.target.psw.value
        };
        this.props.addUser(user);  
        this.props.history.push("/");
    }
    errorMessage() {
        if (this.props.user === 0) {
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
                            <label htmlFor="firstname">First name</label>
                            <input className="form-control" type="text" name="firstname" id="firstname" pattern={"[A-Za-z]+"}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="fname">Full name</label>
                            <input className="form-control" type="text" name="fname" id="fname" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="psw">Password</label>
                            <input className="form-control" type="password" name="psw" id="psw" pattern={"[A-Za-z0-9]+"}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="book1">Books</label>
                            <input className="form-control" type="text" name="book1" id="book1" pattern={"[ A-Za-z0-9_@./#&+-]+"}/>
                            <input className="form-control" type="text" name="book2" id="book2" pattern={"[ A-Za-z0-9_@./#&+-]+"}/>
                        </div>
                        <input className="btn btn-default" type="submit" />
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
export default connect(mapStateToProps, { addUser })(LoginForm);