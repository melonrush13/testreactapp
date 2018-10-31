
import React, { Component } from 'react';
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
              hobbyName: 'running',
              activity: 'athletic'
            },
            {
              hobbyName: 'playing soccer',
              activity: 'athletic'
            },
            {
              hobbyName: 'roller blading',
              activity: 'athletic'
            },
            {
              hobbyName: 'making websites!',
              activity: 'nerdy'
            },
            {
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
  

  //passing our state hobbies in as a [property]
  render() {
    return (
      <div className="App">  
      
        Mel's First React App! 
        <AddHobbie addHobbie={this.handleAddHobbie.bind(this)} />

        <Hobbies hobbies = {this.state.hobbies} />

        <Bio test=" Hello, World!"/>
      
      </div>
    );
  }
}

export default App;
