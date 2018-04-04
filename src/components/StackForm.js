import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class StackForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            cards: [],
        }
    }

    addCard() {
        const { cards } = this.state;
        cards.push({id: cards.length, prompt:'', answer: ''});
        this.setState({cards});
    }
    render () {
        console.log("stackform state", this.state);
        return (
            <div>
                <Link className="link-home" to='/'>
                    <h4>Home</h4>
                </Link>
                <h4>Create a new Stack</h4>
                <br />
                <Form inline>
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        {' '}
                        <FormControl />
                    </FormGroup>
                </Form>
                <br />
                <Button onClick={() => this.addCard()}>Add a card</Button>
            </div>
        )
    }
}

export default StackForm;