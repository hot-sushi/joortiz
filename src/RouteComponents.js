import React from 'react';
const threm = { paddingTop: '4.88rem', backgroundColor:'#fff', minHeight:'330px' }
const jrton = { paddingTop: '4.88rem', backgroundColor:'transparent', minHeight:'80vh', }
import { Container, Grid } from 'semantic-ui-react'

export const Home = () => {
    return(
        <div style={jrton}>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Container textAlign='center' style={{ marginTop:'6.55rem', }}>
                            <h1>Make it an Experience</h1>
                        </Container>

                        <Container textAlign='center' style={{ marginTop:'.55rem', }}>
                            <p>Lorem Ipsum dolor mador.</p>
                        </Container>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export const Work = () => {
    return(

        <div style={threm}>
            <Grid container columns={12}>
                <Grid.Row>
                    <Grid.Column>
                        <h1>Work</h1>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}



export const Career = () => {
    return(

        <div style={threm}>
            <Grid container columns={12}>
                <Grid.Row>
                    <Grid.Column>
                        <h1>Career</h1>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
