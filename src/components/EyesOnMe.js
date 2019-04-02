import React, { Component} from 'react';

class EyesOnMe extends Component {

    onFocus = () => console.log ('Good!')
    onBlur = () => console.log('Hey! Eyes on me!')

    render() {
        return (
            <button onFocus={this.onFocus} onBlur={this.onBlur}>
            </button>
        )
    }
}

export default EyesOnMe;