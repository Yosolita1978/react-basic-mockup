import React, { Component } from 'react';
import './App.css';

class Image extends Component {
  render() {
    return (
      <div className="col-sm-4">
      <a href="https://placeholder.com"><img alt="" src="http://via.placeholder.com/350x150"/></a>
      </div>
    );
  }
}

export default Image;
