import React , {Component} from 'react'
import jwt_decode  from 'jwt_decode'

class profile extends Component{
    constructor(){
        super()
        this.state = {
            first_name : '',
            last_name:'',
            phone : '' ,
            email: ''
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name : decoded.first_name,
            last_name:decoded.last_name,
            phone : decoded.phone,
            email : decoded.email
        })
    }

    render(){
        return(
                <div class="container">
                    <div class="jumbotron mt-5">
                        <div class="col-sm-8 mx-auto">
                            <h1 class="display-3">Welcome {this.state.first_name}</h1>
                        </div>

                        <table class="table col-md-6 mx-auto">
                            <tbody>
                                <tr>
                                    <td>First Name</td>
                                    <td>{this.state.first_name}</td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>{this.state.last_name}</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>{this.state.phone}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
}

export default Profile