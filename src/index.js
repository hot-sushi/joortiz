// ['maverick','charlotte'].forEach(alert);
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Button,Checkbox,Container,Divider,Dropdown,Grid,Header,Icon,Image,List,Menu, Modal,Segment, } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import gmboi from './gmboi.png'
import {Home, Work, Career} from './RouteComponents';
import CookieBanner from './CookieBanner';
const Dashboard = (props) => (
        <div>
            <Menu inverted size='massive'>
                <Container textAlign='center'>
                    <Menu.Item>
                    <Image size='mini' src={gmboi} style={{margin:'0 1.4rem .333rem 0'}}/>
                        Jonathan Ortiz
                    </Menu.Item>
                    <Menu.Item><Link to="/joortiz"><Icon name='globe'/></Link></Menu.Item>
                    <Menu.Item><Link to="/work"><Icon name='suitcase'/></Link></Menu.Item>
                    <Menu.Item><Link to="/career"><Icon name='file code'/></Link></Menu.Item>
                </Container>
            </Menu>
            <Route exact path="/" component={Home} />
            <Route path="/joortiz" component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/career" component={Career} />
            <CookieBanner onAgreement={props.onAgreeToTerms} />
        </div>


);




class App extends Component {
    state = { agreedToTerms: false, }
    handleAgreement = () => this.setState({agreedToTerms: true});
    render () {
        return(
                <Router>
                    <Dashboard onAgreeToTerms={this.handleAgreement}/>
                </Router>

        )
    }
}


render(<App />, document.querySelector('#root'));
