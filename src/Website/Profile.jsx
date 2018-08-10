import React from 'react';

class Profile extends React.Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <h1>Profile</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th>Prateeti</th>
                        <th>Bangalore</th>
                        <th>23</th>
                    </tr>
                </tbody>
            </table>
        </div>
         );
    }
}
 
export default Profile;