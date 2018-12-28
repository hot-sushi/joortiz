// ['maverick','charlotte'].forEach(alert);
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import gmboi from './gmboi.png'

const threm = { paddingTop: '3rem' }

const Home = () => {
    return(
        <div style={threm}>
            <h1>Home</h1>
        </div>
    );
}

const About = () => {
    return(
        <div style={threm}>
            <h1>About</h1>
        </div>
    );
}



const Topics = () => {
    return(
        <div style={threm}>
            <h1>Topics</h1>
        </div>
    )
}

const Navigation = () => (
    <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <Image size='mini' src={gmboi} style={{ marginRight: '1.5em' }} />
          Jonathan Ortiz
        </Menu.Item>
        <Menu.Item><Link to="/joortiz">Home</Link></Menu.Item>
        <Menu.Item><Link to="/about">About</Link></Menu.Item>
        <Menu.Item><Link to="/topics">Topics</Link></Menu.Item>
      </Container>
    </Menu>
    <Route exact path="/joortiz" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
    </div>
);



class App extends Component {
    render () {
        return(
            <Router>
                <Container fluid>
                    <Navigation />
                </Container>
            </Router>

        )
    }
}



render( <App />
    , document.querySelector('#root'));
