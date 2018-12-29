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
  Icon,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import gmboi from './gmboi.png'

const threm = { marginTop: '4.88rem' }

const Home = () => {
    return(
        <div style={threm}>
            <Grid container columns={12}>
                <Grid.Row>
                    <Grid.Column>
                        <h1>Home</h1>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

const About = () => {
    return(

        <div style={threm}>
            <Grid container columns={12}>
                <Grid.Row>
                    <Grid.Column>
                        <h1>About</h1>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}



const Topics = () => {
    return(

        <div style={threm}>
            <Grid container columns={12}>
                <Grid.Row>
                    <Grid.Column>
                        <h1>Skills</h1>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

const Navigation = () => (
    <div>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                <Image size='mini' src={gmboi} style={{margin:'0 1.4rem .333rem 0'}}/>
                joortiz
                </Menu.Item>
                <Menu.Item><Link to="/joortiz"><Icon name='home' size='large'/></Link></Menu.Item>
                <Menu.Item><Link to="/about"><Icon name='user circle outline' size='large'/></Link></Menu.Item>
                <Menu.Item><Link to="/topics"><Icon name='code branch' size='large'/></Link></Menu.Item>
            </Container>
        </Menu>
        <Route exact path="/" component={Home} />
        <Route path="/joortiz" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
    </div>
);



class App extends Component {
    render () {
        return(
                <Router>
                    <Navigation />
                </Router>
        )
    }
}



render( <App />
    , document.querySelector('#root'));
