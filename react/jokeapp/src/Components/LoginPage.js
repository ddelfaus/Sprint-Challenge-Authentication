import React from 'react'
import { axiosWithAuth } from '../Utils/axiosWithAuth'





class LoginPage extends React.Component{

    state = {
        credentials: {
            username: '',
            password: ''
        }


    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }


login = e => {
    e.preventDefault();
    axiosWithAuth() 
    .post('/auth/login', this.state.credentials)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        console.log(res.data.payload)
        this.props.history.push('/friends')
    })
    .catch(err=> console.log(err));

}
render() {
    return (
        <div>
            <form onSubmit ={this.login}>
                <input 
                    type ="text"
                    name="username"
                    value ={this.state.credentials.username}
                    onChange ={this.handleChange}
                    placeholder= "Username Here"
                
                />
                <input 
                    type ="password"
                    name= "password"
                    value = {this.state.credentials.password}
                    onChange= {this.handleChange}
                    placeholder= "password"
                
                />

            <button >Login</button>

            </form>
        </div>

    )

}
}
export default LoginPage