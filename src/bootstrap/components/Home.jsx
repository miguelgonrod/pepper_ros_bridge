import React, {Component} from 'react';
import Connection from "./Connection"
import Teleoperation from "./Teleoperation";
import {Row, Col, Container, Button} from "react-bootstrap";

class Home extends Component{
    state = {
        counter: 0,
    };

    render(){
        return (
            <div>
                <Container>
                    <h1 className="text-center mt-3">Pepper Control Page</h1>
                    <Row>
                        <Col>
                            <Connection />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Teleoperation />
                        </Col>
                        <Col>
                            <h1>MAP</h1>
                            <p>This region will be used later for displaying a map</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;