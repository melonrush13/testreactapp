import React, { Component } from 'react';
import uuid from 'uuid';
class AddHobbie extends Component {

    //store data we submit into state
    constructor() {
        super();
        this.state = {
            //object
            newHobbie: {}
        }
    }
    
    static defaultProps = {
        activies: ['nerdy', 'athletic', 'musical', 'outdoorsey']
    }

    handleSubmit(e) {
        
        //ref - grabs the attribute of the form
        if(this.refs.hobbyName.value === '') {
            alert('Please type in the textbox one of your hobbies!');
        } else {
            this.setState({newHobbie: {
                id: uuid.v4,
                hobbyName: this.refs.hobbyName.value,
                activity: this.refs.activity.value
            }}, function(){

                this.props.addHobbie(this.state.newHobbie);
            });
        }
        e.preventDefault();
    }

    render() {
        let activityOptions = this.props.activies.map(activity => {
            return <option key ={activity} value= {activity}>{activity}</option>
        });
        return (
        <div>  
            <h3>Add Hobby</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <lable>Hobby</lable><br />
                    <input type="text" ref="hobbyName" />
                </div>
                <div>
                    <label>Activity</label><br />
                    <select ref="activity"> 
                        {activityOptions}
                    </select>
                </div>
                <br />
                <input type="submit" value="Submit!" />
                <br />
            </form>
        </div>
        );
    }
    }

export default AddHobbie;
