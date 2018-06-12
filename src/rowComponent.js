import React, { Component } from 'react';
import Image from './img.js';
import Paragraph from './ptag.js';

class RowContainer extends Component {
  render() {
    return (
      <div className="row mt-3">
      <Image />
      <Paragraph />
      </div>
    );
  }
}

export default RowContainer;
