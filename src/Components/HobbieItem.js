import React, { Component } from 'react';

class HobbieItem extends Component {

    deleteHobbie(id) {
       // console.log('test');
        //change state
        //pass to hobbies-> main app component 
        this.props.onDelete();
    }

    render() {
        return (
        <li className = "Hobby">
            <strong>{this.props.hobby.hobbyName}</strong>: {this.props.hobby.activity} 
            <a href="#" onClick={this.deleteHobbie.bind(this, this.props.hobby.id)}> X</a>
            
            }
        </li>
        );
    }
}

export default HobbieItem;
