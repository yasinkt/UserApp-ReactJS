import { Component } from "react";
import User from "./User";

class Users extends Component{
    render(){
        const {users,deleteUser} = this.props;

        return(
            <table className="table table-responsive">
                <thead>
                        <tr>
                            <th className="d-none" scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Delete</th>
                        </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=>{
                            const {id,name,email} = user;

                            return <User key={id} id={id} name={name} email={email} deleteUser={deleteUser}/>
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default Users
