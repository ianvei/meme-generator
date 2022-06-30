import React, { Component } from "react";
import memesData from '../memesData.js'

export default class Meme extends Component {
    constructor(){
        super()

        this.state = {
            url: '',
        }
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
                <img src={url} alt="" />
            </main>
        )
    }
}