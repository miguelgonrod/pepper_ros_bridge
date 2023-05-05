import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

class About extends Component{
    render(){
        return (
        <Container>
            <main>
                <h1>About</h1>
                <p>This react app was developed by Miguel Angel Gonzalez Rodriguez, it controls and monitors ROS-enabled robots, specially pepper through a Web Interface</p>
            </main>
        </Container>
        );
    }
}

export default About;