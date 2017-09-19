import React, { Component } from 'react';
import { connect } from 'react-redux';
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { setStack } from '../actions';

class Stacklist extends Component {
    render () {
        console.log ('stacklist props', this.props)
        return (
            <div>
                {
                    stacks.map(stack => {
                        return (
                            <Link
                             key={stack.id} 
                             to='/stack'
                             onClick={() => this.props.setStack(stack) }
                            >
                                <h4 >{stack.title}</h4>
                            </Link>
                            
                        )
                    })
                }
            </div>
        )
    }
}
//first parameter of connect function is null because it doesn't listen to the redux store
export default connect(null, { setStack })(Stacklist);