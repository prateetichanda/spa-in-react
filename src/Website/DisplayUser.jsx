import React from 'react';
class DisplayUser extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            {this.props.myId},{this.props.myName},{this.props.mySalary}
            </div>
        );
    }
}
 
export default DisplayUser;