import React, {Component} from 'react';
import {NavItem} from 'react-bootstrap';
import './App.css';

class TaskTimer extends Component{
constructor(props){
          super(props);
          this.state= {
          }
        }

        render()
        {
          return(
            <div>
                {this.props.hours}:{this.props.minutes}:{this.props.seconds}
              <div>{this.props.task}</div>
            </div>
          )
        }
      }

      export default TaskTimer;
