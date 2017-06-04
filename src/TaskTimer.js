import React, {Component} from 'react';
import {NavItem} from 'react-bootstrap';
import './App.css';

class TaskTimer extends Component{
constructor(props){
          super(props);
          this.state= {
            timer:'',
            time:0,
            hour:0,
            minute:0,
            second:0
          }
        }

        componentWillMount(){
          this.setState({time:this.props.time});
        }

        componentDidMount(){
          if(this.props.timerRuns){
            setInterval(() => this.countUp(this.state.time),1000);
          }
        }

        componentWillReceiveProps(next)
        {
          console.log("Props: ",next)
          let timer;
          if(next.timerRuns === true){
             timer = setInterval(() => this.countUp(this.state.time),1000);
             console.log("Timer: 1",timer)
            this.setState({timer});
          }
          else
          {
            console.log("Timer: ",this.state.timer)
            clearInterval(this.state.timer)
          }
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
