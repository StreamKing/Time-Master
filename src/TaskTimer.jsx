import React, {Component} from 'react';
import {NavItem} from 'react-bootstrap';
import './App.css';

class TaskTimer extends Component{
constructor(props){
          super(props);
          this.state= {
            time:0,
            hour:0,
            minute:0,
            second:0
          }
        }

        componentWillMount(){
          console.log("Will: "+this.props.time);
          this.setState({time:this.props.time});
          console.log("Will: "+this.state.time);
        }

        componentDidMount(){
          setInterval(() => this.countUp(this.state.time),1000);
        }

        countUp(timerTime){
          let time = this.state.time + 1;
          const timeleft = time;

          const  hour = Math.floor( timeleft / 3600 );
          const  minute = Math.floor( (timeleft%3600) / 60 );
          const  second = Math.floor( timeleft%60 );
          this.setState({time,hour,minute,second});
        }

        render()
        {
          return(
            <NavItem>{this.state.hour}:{this.state.minute}:{this.state.second}</NavItem>
          )
        }
      }

      export default TaskTimer;
