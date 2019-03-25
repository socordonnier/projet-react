import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//import axios from 'axios'; 



export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href = "http://localhost:8000/api/v1/patients?room=None">Patients placés 
            
    
      </DropdownItem>
          
        
          <DropdownItem href = "http://localhost:8000/api/v1/patients?room!=none">Patients en attente</DropdownItem>
          <DropdownItem href ="http://localhost:8000/api/v1/patients">Tous les patients  </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}