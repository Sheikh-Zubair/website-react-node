import React, { Component } from 'react';
import MainContent from '../page_contents/main_content';

export default class App extends Component {
  render() {
    return (
        <div className="constainer" style={{height: "400px"}} id="app">
          <MainContent />
        </div>
    );
  }
}
