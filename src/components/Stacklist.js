import React, { Component } from 'react';
import { connect } from 'react-redux';
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { setStack, loadStacks } from '../actions';

class Stacklist extends Component {
    componentDidMount() {
        if (this.props.stacks.length === 0) this.props.loadStacks(stacks);
    }
    render () {
        return (
            <div>
                {
                    this.props.stacks.map(stack => {
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
function mapStatesToProps(state) {
    return { stacks: state.stacks };
}
//first parameter of connect function is null because it doesn't listen to the redux store
export default connect(mapStatesToProps, { setStack, loadStacks })(Stacklist);