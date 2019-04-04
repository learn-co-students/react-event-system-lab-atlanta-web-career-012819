import React from 'react';

class EyesOnMe extends React.Component {
    
    handleButton = () => console.log('Good!')
    handleBlur = () => console.log('Hey! Eyes on me!')

    render() {
        return(
            <div>
            <button onFocus={this.handleButton}  onBlur={this.handleBlur}/>
            </div>
        )
    }

}

export default EyesOnMe;