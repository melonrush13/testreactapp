
import React, { Component } from 'react';
import uuid from 'uuid';
import Hobbies from './Components/Hobbies';
import Bio from './Components/Bio';
import AddHobbie from './Components/AddHobbie';
import './App.css';

class App extends Component {

  //hard coding data in state
  //define intial state keys
  constructor() {
    super();
    this.state = {
      //state called hobbies
      hobbies: []
      
    }
  }

  //fires off everytime component is rerendered
  componentWillMount() {
    this.setState({hobbies: [ 
            {
              id:uuid.v4(),
              hobbyName: 'running',
              activity: 'athletic'
            },
            {
              id:uuid.v4(),
              hobbyName: 'playing soccer',
              activity: 'athletic'
            },
            {
              id:uuid.v4(),
              hobbyName: 'roller blading',
              activity: 'athletic'
            },
            {
              id:uuid.v4(),
              hobbyName: 'making websites!',
              activity: 'nerdy'
            },
            {
              id:uuid.v4(),
              hobbyName: 'Playing VideoGames',
              activity: 'nerdy'
            },
          ]
        });
  }
    
  handleAddHobbie(hobby) {
    console.log(hobby);

    //grabbing what is already there
    let hobbies = this.state.hobbies;

    //and pushing our new ones to it
    hobbies.push(hobby);
    this.setState({hobbies: hobbies});
  }

  handleDeleteHobby(id) {
    //get id from state
    let hobbies = this.state.hobbies;

    //get id we want, and reset the state. 
    let index = hobbies.findIndex(x => x.id === id);
    //where that index is, delete one from that
    hobbies.splice(index, 1);
    //reset the state
    this.setState({hobbies:hobbies});
  }
  

  //passing our state hobbies in as a [property]
  render() {
    return (
      <div className="App">  
      
        Mel's First React App! 
        <AddHobbie addHobbie={this.handleAddHobbie.bind(this)} />

        <Hobbies hobbies = {this.state.hobbies} onDelete = {this.handleDeleteHobby.bind(this)} />

        <Bio test=" Hello, World!"/>
      
      </div>
    );
  }
}

export default App;
