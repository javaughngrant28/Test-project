import React, { Component } from "react";
import axios from 'axios'


export default class LoginUser extends Component{

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword= this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          email: '',
          password: '',
        }
      }


      onChangeUserEmail(e) {
        this.setState({email: e.target.value})
      }

      onChangeUserPassword(e) {
        this.setState({password: e.target.value})
      }

    
    
      onSubmit(e) {
        e.preventDefault()
         const login_user = {
          email: this.state.email,
          password: this.state.password,
        };

        axios.post('http://localhost:8000/api/users/login', login_user)

          .then(res => console.log(res.data.message));
        
        // console.log('hi it works')
    
        this.setState({ email: '', password: ''})
      }

      render(){

      
    return(



    <form onSubmit={this.onSubmit} className="page_div">
        
        <div className="form_div">

            <div className="input_label">Email</div>
            <input className="input_text"  value={this.state.email} onChange={this.onChangeUserEmail} type={'text'}/>

            <div className="input_label">Password</div>
            <input className="input_text" value={this.state.password} onChange={this.onChangeUserPassword} type={'password'}/>

        </div>

        <div className="logIn_btn_div">
            <input className="login_btn" type={'submit'} value ={'LOGIN'}/>
        </div>

        <div className="registration_ling_div">
            <a href="/signup" className="registration_ling">Don't have an account? <span className="registration_span">Register</span> here</a>
        </div>

        </form>

    )

}
}

