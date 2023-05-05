import React, {Component} from 'react';
import Connection from "./Connection"
import RobotState from "./RobotState";
import Teleoperation from "./Teleoperation";
import Map from "./Map";
import Text from "./Text";
import {Row, Col, Container, Button} from "react-bootstrap";

class Home extends Component{
    state = {
        counter: 0,
    };

    render(){
        return (
            <div>
                <Container>
                    <main>
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
                        </Row>
                        <Row>
                            {" "}
                            <Col>
                                <RobotState />
                            </Col>
                            <Col>
                                <h1>Speech</h1>
                                <Text />
                            </Col>
                        </Row>
                    </main>
                </Container>
            </div>
        );
    }
}

export default Home;