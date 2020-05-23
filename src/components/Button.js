import React from 'react';
import {connect} from 'react-redux';
import {increment} from '../actions';
import {decrement} from '../actions';
;
class Button extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    The number is: {this.props.count}
                </h1>
                <button onClick={() => this.props.increment(1)}>  Increment Counter</button>
                <button onClick={() => this.props.decrement(1)}>  Decrement Counter</button>
            </div>
        )
        
    }
}

// state has entire state of app!!
const mapStateToProps =  (state) => { // name is by convention
    return {count: state.count}; // now it will appear as props
}

// export default Button; 
// connect connects state to component 
export default connect(mapStateToProps, {increment, decrement}) (Button);
// calls a fn that calls a fn w Button as a param