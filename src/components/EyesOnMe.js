// Code EyesOnMe Component Here
import React from 'react';

// In the components/EyesOnMe.js file, create a EyesOnMe React component.
class EyesOnMe extends React.Component {

    // When the focus event fires, use console.log to print out the text 'Good!'.
    onFocus = () => console.log('Good!')

    // When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
    onBlur = () => console.log('Hey! Eyes on me!')

    // In that component, render a button.
    render() {
        return (

            // On that button, add event handlers that listens for the focus and blur events.
            <button onFocus={this.onFocus} onBlur={this.onBlur}>
            Eyes on me, please!
            </button>
        )
    }
}

export default EyesOnMe;
