import React , {Component} from 'react'
import {login} from "./UserFunctions"

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email : '',
            password: '',
        }

        this.onChange = this.onChange.bind(this)
        this.OnSubmit = this.OnSubmit.bind(this)
    }

    onChange(e){
        e.preventDefault()

        const User = {
            email : this.state.email,
            password : this.state.password
        }

        login(user).then(res =>{
            if(res){
                this.props.history.push(`/profile`)
            }
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
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Login