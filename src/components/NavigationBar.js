import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';


class NavigationBar extends Component{
  render() {
    return(
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="SliderPage">Slider</Nav.Link>
            <Nav.Link href="GuessGamePage">Guess Game</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavigationBar;
