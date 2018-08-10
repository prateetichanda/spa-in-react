import React from 'react';
import axios from 'axios';


class Home extends React.Component {
   
    constructor()
    {
        super();
        this.state={
            name:'',
            salary:''
        }
        this.captureFriendName=this.captureFriendName.bind(this)
        this.captureFriendSalary=this.captureFriendSalary.bind(this)
        //this.captureFriendUsername=this.captureFriendUsername.bind(this)
        this.onFriendSubmit=this.onFriendSubmit.bind(this)
    }

    captureFriendSalary(eventObject)
    {
        console.log(eventObject.target.value);
        this.setState({salary:eventObject.target.value})
    }

    captureFriendName(eventObject)
    {
        console.log(eventObject.target.value);
        this.setState({name:eventObject.target.value})
    }

    // captureFriendUsername(eventObject)
    // {
    //     console.log(eventObject.target.value);
    //     this.setState({username:eventObject.target.value})
    // }

    onFriendSubmit(eventObject)
    {
        eventObject.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8091/users",this.state).
                                    then((response)=>{
                                            console.log("POST successful")
                                                   })
    }
    render() {  
        return ( 
                <div>
                    <h1>Home</h1>
                    <p>Prateeti's Home page</p>
               
                <div>
                    <h3>Add Friend</h3>
                    <form onSubmit={this.onFriendSubmit}>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.captureFriendName} placeholder="enter your name"></input><br></br>
                    Salary:
                    <input type="text" value={this.state.salary} onChange={this.captureFriendSalary} placeholder="enter your salary"></input><br></br>
                    {/* Username:
                    <input type="text" value={this.state.username} onChange={this.captureFriendUsername}></input><br></br>  */}
                    
                    <button type="submit">Add friends</button>
                    </form>
                </div>
                </div>
         );
    }
}
 
export default Home;