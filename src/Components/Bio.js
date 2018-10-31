import React, { Component } from 'react';

class Bio extends Component {
  render() {
    return (
      <div className="Bio">  
       <br />
        Thanks for reading about me! 

        {this.props.test}
        
      </div>
    );
  }
}

export default Bio;
