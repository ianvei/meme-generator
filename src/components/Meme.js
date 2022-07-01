import React, { Component } from "react";
import memesData from '../memesData.js'
import nicImg from '../images/nic.png'

export default class Meme extends Component {
    constructor(){
        super()

        this.state = {
            topText: '',
            bottomText: '',
            url: '',
            allMemeImages: [],
        }

        this.setMemeUrl = this.setMemeUrl.bind(this)
    }

    setMemeUrl = () => {
        const memesArray = memesData.data.memes;
        let memeItem = memesArray[Math.floor(Math.random()*memesArray.length)];
        console.log(memeItem.url);
        this.setState({
            url: memeItem.url
        });
    }

    render(){
        const { url } = this.state;
        return (
            <main>
                <div className="form">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                    <button 
                        className="form--button"
                        onClick={this.setMemeUrl}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
                <div className="img-cont">
                    <img src={url} alt="" className="meme--image"/>
                    <img src={nicImg} alt="" className="nic--image"/>     
                </div>
                
            </main>
        )
    }
}