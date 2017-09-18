import React, { Component } from 'react';
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';

class Stacklist extends Component {
    render () {
        return (
            <div>
                {
                    stacks.map(stack => {
                        return (
                            <Link key={stack.id} to='/stack'>
                                <h4 >{stack.title}</h4>
                            </Link>
                            
                        )
                    })
                }
            </div>
        )
    }
}

export default Stacklist;