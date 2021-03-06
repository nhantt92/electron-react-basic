import React, { Component } from 'react';
import { render } from 'react-dom';
import Logo from './components/Logo/index';
import Ping from './components/Ping/Ping';

import ElectronImg from './assets/electron.png';
import ReactImg from './assets/react.png';
import WebpackImg from './assets/webpack.png';

const logos = [
    ElectronImg,
    ReactImg,
    WebpackImg
]

export default class App extends Component {
    render() {
        const logosRender = logos.map((logo, index) => {
            return <Logo key={index} src={logo} />
        });
        return (
            <div> {logosRender}
                <div className="hello">
                    <h1>Hello React</h1>
                </div>
                <Ping />
            </div>
        )
    }
}