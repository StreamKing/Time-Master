import React, { Component } from "react";
import TaskTimer from "./TaskTimer";
import { Glyphicon, NavItem } from "react-bootstrap";
import "./App.css";

class TaskTimerComposite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerRuns: false,
      time: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  track() {
    let timer;
    if (this.state.timerRuns) {
      this.setState({ timerRuns: false });
      console.log("Timer: ", this.state.timer);
      clearInterval(this.state.timer);
    } else {
      this.setState({ timerRuns: true });
      timer = setInterval(() => this.countUp(this.state.time), 1000);
      console.log("Timer: 1", timer);
      this.setState({ timer });
    }
    console.log("Works");
  }

  countUp(timerTime) {
    let time = this.state.time + 1;
    const timeleft = time;

    const hours = Math.floor(timeleft / 3600);
    const minutes = Math.floor(timeleft % 3600 / 60);
    const seconds = Math.floor(timeleft % 60);
    console.log('CountUp',time,hours,minutes,seconds);
    
    this.setState({ time, hours, minutes, seconds });
  }

  render() {
    return (
      <NavItem>
        <Glyphicon
          bsSize="Large"
          glyph="play-circle"
          onClick={() => this.track()}
        />
        <TaskTimer
          seconds={this.state.seconds}
          minutes={this.state.minutes}
          hours={this.state.hours}
          task={"Task 1"}
        />
      </NavItem>
    );
  }
}

export default TaskTimerComposite;
