import { Component } from "react";
import AddUser from "./companents/AddUser";
import Users from "./companents/Users";


class App extends Component{

  deleteUser(id){

    let updateUsers = this.state.users;

    updateUsers = updateUsers.filter(user=> user.id !== id);

    this.setState({
      users:updateUsers
    });

  }

  addUser(newUser){
    let updateUsers = this.state.users;

    updateUsers.push(newUser);

    this.setState({
      users:updateUsers
    })
     
  }

  constructor(props){
    super(props);
    this.state={
      users:[
        {
          "id":"bbf65a1e-9603-4851-83bc-ceba57825226",
          "name":"Murat",
          "email":"murat@gmail.com"
        },
      ]
    }
    this.deleteUser = this.deleteUser.bind(this)
    this.addUser = this.addUser.bind(this)
  }

  render(){
    return(
      <div className="container mt-4">
        <h5>User Application</h5>
        <hr/>
        <AddUser addUser={this.addUser}/>
        <hr/>
        <Users deleteUser={this.deleteUser} users={this.state.users}/>
      </div>
    );
  }
  
}

export default App;
