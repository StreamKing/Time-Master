
import React, {Component} from 'react';
import TopToolbar from './TopToolbar'
import Tasks from './Tasks';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
    }
  }



  render()
  {
    return(
      <div>
        <div>
          <TopToolbar />
          <Tasks />
        </div>
        <div className="App" />
      </div>
    )
  }
}



export default App;
