import React, { Component } from 'react';
import Login from './login_page';
import { connect } from 'react-redux';
import Dashboard from './dashboard';


class App extends Component {
  renderView() {
    if(this.props.user){
      return <Dashboard />
    }else if(this.props.user === null){
      return <h4>Loading...</h4>
    }
    return <Login />
  }
  render() {
    return (
        <div className="container" style={{height: "400px"}} id="app">
          {this.renderView()}
        </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App);