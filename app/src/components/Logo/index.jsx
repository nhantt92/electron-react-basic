import React, {Component}  from 'react'
import './styles.css'

export default class Logo extends Component {
    render() {
        return <img src={this.props.src} className="logo"/>
    }
}