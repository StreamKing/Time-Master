import React, {Component} from 'react';
import {Button,Glyphicon,ButtonGroup,ButtonToolbar} from 'react-bootstrap';
import './App.css';

class TopToolbar extends Component{
constructor(props){
          super(props);
          this.state= {
          }
        }

        track()
        {
          console.log("Works");
        }

        render()
        {
          return(
            <div>
            <ButtonToolbar>
            <ButtonGroup>
              <Button>Menu</Button>
              <Button>User</Button>
              <Button>Project-Manager</Button>
              <Button>Options</Button>
              <Button>About</Button>
            </ButtonGroup>
            <ButtonGroup>
               {/*<Button bsSize="large"><Glyphicon glyph="play-circle" /> </Button>*/}
               <Glyphicon bsSize="Large" glyph="play-circle" onClick={() => this.track()}/>
              {/* <button className="TrackButton"><Glyphicon glyph="play-circle"/></button>*/ }
            {/*   <Glyphicon glyph="stop"></Glyphicon>
               <Button bsSize="large"><Glyphicon glyph="stop" /> </Button>*/}

            </ButtonGroup>
            </ButtonToolbar>
            </div>
          )
        }
      }

      export default TopToolbar;
