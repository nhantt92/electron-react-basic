import React, { Component } from 'react'
import { ipcRenderer } from 'electron';

export default class Ping extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnRenderer = this.handleOnRenderer.bind(this);
    }

    componentDidMount(){
        ipcRenderer.on('MAIN_SEND', this.handleOnRenderer);
    }

    componentWillMount() {
        ipcRenderer.removeAllListeners('MAIN_SEND', this.handleOnRenderer)
    }
    handleOnRenderer(event, data){
        console.log(data);
    }

    handleOnClick() {
        //console.log('handleOnClick');
        ipcRenderer.send('PING_TO_MAIN', 'I am Renderer');
    }
    render() {
        return (
            <div>
                <h1> Test IPCModule</h1>
                <button onClick={this.handleOnClick}>Ping Main</button>
            </div>
        )

    }
}