import React, { Component } from 'react';
import CardHeader from './card_header';

export default class App extends Component {

  render() {
    return (
      <div className="container-fluid" id="card">
        <div>
          <CardHeader />
        </div>
      </div>
    );
  }
}

