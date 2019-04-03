// Code Keypad Component Here
import React from 'react';

// In the components/Keypad.js file, create a Keypad React component.
class Keypad extends React.Component {
    // In that component, render an input with the right type.
    // When that event fires, use console.log to print out the text 'Entering password...'.
    handleInputPassword = () => console.log('Entering password...')

    // On that input, add an event handler that listens for the keyUp event.
    render() {
        return (
            <div>
                <input
                    type="password"
                    onKeyUp={this.handleInputPassword}
                />    
            </div>
        )
    }
}

export default Keypad;
