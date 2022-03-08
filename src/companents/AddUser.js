import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';


class AddUser extends Component{

    state = {
        name:"",
        email:""
    }

    onNameChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onEmailChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onAddSubmit(e){

        const {addUser} = this.props;
        const {name,email} = this.state;

        const newUser = {
            id:uuidv4(),
            name:name,
            email:email
        }

        addUser(newUser)

        e.preventDefault();
    }

    render(){
        const {name,email} = this.state;
        return(
            <div className="card">
                <h4 className="card-header">Add New User</h4>
                <div className="card-body">
                    <div className="row">
                    <div className="col-md-12">
                         <form onSubmit={this.onAddSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input id="name" required type="text" name="name" placeholder="Enter Name" className="form-control" value={name} onChange={this.onNameChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" required type="email" name="email" placeholder="Enter Email" className="form-control" value={email} onChange={this.onEmailChange.bind(this)}/>
                            </div>
                            <button type="submit" className="btn btn-success mt-4">Save User</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser
