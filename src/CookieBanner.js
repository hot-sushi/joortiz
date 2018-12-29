import React, { Component } from 'react';
import { Button,Container,Grid,Header,Icon,Menu, Modal, } from 'semantic-ui-react'

class CookieModal extends Component {
    state = { modalOpen: false }

    handleOpen = () => this.setState({modalOpen: true});

    handleClose = () => this.setState({modalOpen: false});
    render(){
        return(
            <Modal
                trigger={<Button size='massive' inverted color='green' onClick={this.handleOpen}>Experience Agreement</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
                >
                <Header icon='browser' content='Cookies policy' />
                <Modal.Content>
                  <h3>We use cookies to improve your online experience. Take a look at our Cookie Policy to learn more and change your preferences. By continuing to use our website we assume you are happy to allow the use of these cookies.</h3>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='green' onClick={this.handleClose} inverted>
                    <Icon name='checkmark' /> Got it
                  </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
const CookieBanner = (props) => (
    <React.Fragment>
        <Container textAlign='center'>

            <CookieModal />
        </Container>
    </React.Fragment>
);

export default CookieBanner;
