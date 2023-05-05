import React, { Component } from "react";
import {Container} from 'react-bootstrap';

class Footer extends Component{
    render(){
        return (
            <Container className="text-center">
                <p>RAS Javeriana Lab &copy; 2023</p>
            </Container>
        );
    }
}

export default Footer;