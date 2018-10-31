
import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Hobbies from './Components/Hobbies';
import AddHobbie from './Components/AddHobbie';
import Todos from './Components/Todos'
import './App.css';

class App extends Component {

  //hard coding data in state
  //define intial state keys
  constructor() {
    super();
    this.state = {
      //state called hobbies
      hobbies: [],
      todos: []
      
    }
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      catche: false,
      success: function(data) {
        this.setState({todos: data}, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  getHobbies() {
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
        hobbyName: 'Playing VideoGames',
        activity: 'nerdy'
      },
    ]});
  }

  //fires off everytime component is rerendered
  componentWillMount() {
    this.getTodos();
    this.getHobbies();
  }

  //lifecycle function
  componentDidMount() {
    this.getTodos();
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
        <hr />
        <Todos todos={this.state.todos}/>
      
      </div>
    );
  }
}

export default App;
