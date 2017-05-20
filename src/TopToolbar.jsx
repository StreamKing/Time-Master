import React, {Component} from 'react';
import TaskTimer from './TaskTimer';
import {Glyphicon,Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';
import './App.css';

class TopToolbar extends Component{
constructor(props){
          super(props);
          this.state= {
            taskTime:0,
            task:""
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
              <Navbar  >
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">Time-Master</a>
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                  <NavItem eventKey={1} href="#">Menu</NavItem>
                  <NavItem eventKey={2} href="#">User</NavItem>
                  <NavItem eventKey={2} href="#">Projekte</NavItem>
                  <NavItem eventKey={2} href="#">User</NavItem>
                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                  </NavDropdown>
                  <NavItem><Glyphicon bsSize="Large" glyph="play-circle" onClick={() => this.track()}/></NavItem>
                  <TaskTimer
                     time={0}
                   />
                  <NavItem>Today: 01:00:25</NavItem>
                </Nav>
              </Navbar>
            </div>
          )
        }
      }

      export default TopToolbar;
