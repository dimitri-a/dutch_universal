import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Kid } from './kid.jsx';

export class Hero extends Component {

    constructor(props, context) {
        super(props, context);

        this.toggle = this.toggle.bind(this);
        this.state = { open: false }
    }

    toggle() {
        console.log('toggle');
        this.setState({ open: !this.state.open });
        console.log(this.state.open);
    }

    render() {
        return (
            <div>
                <span className="red">njnnn
                    <Button onClick={this.toggle.bind(this)}>Click this</Button>
                    <div className={this.state.open ? 'open' : 'close'}>
                        show me
               </div>
                </span>
            </div>
        );
    }
}

export default Hero;