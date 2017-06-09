import React,{Component} from 'react';
import {FormControl,Glyphicon} from 'react-bootstrap';

class Tasks extends Component{
constructor(props){
          super(props);
          this.state ={
            options: [{value: 'HA'}, {value: 'SE'}]
          }
            
          }

        addTask()
        {
          this.setState({options: this.state.options.concat({value:this.state.selectedTask})});
          console.log("event: " + this.state.selectedTask);
        }

        render()
        {
          return(
            <div className="Tasks">Tasks
              <FormControl componentClass="select" placeholder="Type">
                {this.state.options.map((option,index) => {
                  return (<option key={index} value={option.value}>{option.value}</option>)
                })
              }
              </FormControl>
          <div>
             <Glyphicon glyph="plus" onClick={() => this.addTask()}/>
             <Glyphicon glyph="minus"/>
             <FormControl
               className="littleText"
               type="text"
               value={this.state.value}
               placeholder="Enter Task"
               onChange={event => this.setState({selectedTask: event.target.value})}
             />
            </div>
          </div>
          );
        }
      }

      export default Tasks;
