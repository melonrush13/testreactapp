import React, { Component } from 'react';

class HobbieItem extends Component {
  render() {
    return (
      <li className = "Hobby">
        <strong>{this.props.hobby.hobbyName}</strong>: {this.props.hobby.activity}
      </li>
    );
  }
}

export default HobbieItem;
