import React,{Component} from 'react';
import {FormControl,Glyphicon} from 'react-bootstrap';

class Tasks extends Component{
constructor(props){
          super(props);
          this.state= {
            taskInTextField:"",
          }
        }

        addTask()
        {
          console.log("event: " + this.state.taskInTextField);
        }

        render()
        {
          return(
            <div className="Tasks">Tasks
            <FormControl componentClass="select" placeholder="select" id="TaskSelect">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
          <div>
             <Glyphicon glyph="plus" onClick={() => this.addTask()}/>
             <Glyphicon glyph="minus"/>
             <FormControl
               className="littleText"
               type="text"
               value={this.state.value}
               placeholder="Enter Task"
               onChange={event => this.setState({taskInTextField: event.target.value})}
             />
            </div>
          </div>
          )
        }
      }

      export default Tasks;
