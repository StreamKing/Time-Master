
import React, {Component} from 'react';
import TopToolbar from './TopToolbar'
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
        </div>
        <div className="App-title">My TimeMaster</div>
        <div className="App" />
      </div>
    )
  }
}



export default App;
