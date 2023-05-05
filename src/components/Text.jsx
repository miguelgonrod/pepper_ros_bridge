import React, { Component, useState } from "react";
import {Container} from 'react-bootstrap';

class Text extends Component{
    state = {text: ""}
    const [texto, setSearch] = useState('');
    getData(val){
        this.setState({text: val.target.value});
    }

    render(){
        return (
            <div className="App">
                <h1>{this.text}</h1>
                <input type="text"/>
                <button onClick={this.getData}>Send to pepper</button>
            </div>
        );
    }
}

export default Text;