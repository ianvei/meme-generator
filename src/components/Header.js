import React, { Component } from "react";
import trollFaceImg from "../images/troll-face.png"

export default class Header extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
        <header className="header">
            <img 
                src={trollFaceImg}
                className="header--image"
                alt='troll face'
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
        )
    }
}