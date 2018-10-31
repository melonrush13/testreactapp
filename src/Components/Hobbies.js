import React, { Component } from 'react';
import HobbieItem from './HobbieItem';

class Hobbies extends Component {

  render() {
      let hobbieItems;
      //if there are any hobbies,
      if(this.props.hobbies) {
          
        //want to map through the array
        hobbieItems = this.props.hobbies.map(hobby => {

          return (
            <HobbieItem key = {hobby.hobbyName} hobby = {hobby} />
          );
          
      });
    }

    return (
      <div className="Hobbies">  
      
        <h3>Hobbies of Mine</h3>
        {hobbieItems}
        
        
      </div>
    );
  }
}

export default Hobbies;
