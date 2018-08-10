import React from 'react'
import axios from 'axios'
import DisplayUser from './DisplayUser'
class Friends extends React.Component {
 
    constructor()
    {
        super()
        this.state={
            remoteUsers:[]
        }
        this.getRemoteUsers=this.getRemoteUsers.bind(this)
    }
    componentDidMount()
    {
        console.log("Component is mounted")
         this.getRemoteUsers()
    }
    getRemoteUsers()
    {
        axios.get("http://localhost:8091/users/getAll").then(((res)=>{
            console.log("AXIOS call was success")
            console.log(res.data)
            this.setState({remoteUsers:res.data})
            console.log("Value of state-this.state.remoteUsers");
            console.log(this.state.remoteUsers);
        }))
    }
    render() { 
        const allUsers=this.state.remoteUsers.map((user)=>(
            <DisplayUser
                hey={'user-' + user.id}
                myId={user.id}
                myName={user.name}
                mySalary={user.salary}
                //myemail={user.email}
            ></DisplayUser>
        ))
        return (     
             <div>
                <h1>Friends</h1>
                  {allUsers}
            </div>
        );
    }
}
 
export default Friends;