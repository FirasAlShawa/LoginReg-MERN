import React , {Component} from 'react'
import {register} from "./UserFunctions"

class Register extends Component {
    constructor(){
        super()
        this.state = {
            first_name : '',
            last_name : '',
            phone : '',
            email : '',
            password: '',
        }

        this.onChange = this.onChange.bind(this)
        this.OnSubmit = this.OnSubmit.bind(this)
    }

    onChange(e){
        e.preventDefault()

        const user = {
            first_name :  this.state.first_name,
            last_name :  this.state.last_name,
            phone :  this.state.phone,
            email : this.state.email,
            password : this.state.password
        }

        register(user).then(res =>{
            this.props.history.push(`/login`)
        })
    }

    render(){
        return(
            <div class="container">
            <div class="row">
                <div class="col-md-6 mt-5 mx-auto">
                    <form novalidate onSubmit={this.onSubmit}>
                        <h1 class="h3 mb3 font-weight-normal">
                            Please sign in
                        </h1>
                        <div class="form-group">
                            <label for="first_name">First Name </label>
                            <input  type="text"
                                    class="form-control"
                                    name="first_name"
                                    placeholder="Enter First Name"
                                    value = {this.state.first_name}
                                    onChange={this.onChange}/>
                          </div>
                          <div class="form-group">
                            <label for="last_name">Last Name </label>
                            <input  type="text"
                                    class="form-control"
                                    name="last_name"
                                    placeholder="Enter "
                                    value = {this.state.last_name}
                                    onChange={this.onChange}/>
                          </div>
                          <div class="form-group">
                            <label for="phone">Phone</label>
                            <input  type="phone"
                                    class="form-control"
                                    name="phone"
                                    placeholder="Enter phone"
                                    value = {this.state.phone}
                                    onChange={this.onChange}/>
                          </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input  type="email"
                                    class="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value = {this.state.email}
                                    onChange={this.onChange}/>
                          </div>
                          <div class="form-group">
                            <label for="password">Password</label>
                            <input  type="password"
                                    class="form-control"
                                    name="password"
                                    placeholder="Enter password"
                                    value = {this.state.password}
                                    onChange={this.onChange}/>
                          </div>
                          <button type="submit" class="btn btn-lg btn-primary btb-block">
                              Register
                          </button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default Register