import React, { Component } from "react";
import axios from 'axios'


export default class CreateUser extends Component{

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword= this.onChangeUserPassword.bind(this);
        this.onChangeUserConfirm_password= this.onChangeUserConfirm_password.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          email: '',
          password: '',
          confirm_password: ''
        }
      }


      onChangeUserName(e) {
        this.setState({name: e.target.value})
      }
      
      onChangeUserEmail(e) {
        this.setState({email: e.target.value})
      }

      onChangeUserPassword(e) {
        this.setState({password: e.target.value})
      }

      onChangeUserConfirm_password(e) {
        this.setState({confirm_password: e.target.value})
      }
    
    
      onSubmit(e) {
        e.preventDefault()
         const create_user = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          confirm_password: this.state.confirm_password,
        };

        axios.post('http://localhost:8000/api/users/', create_user)

          .then(res => console.log(res.data));
        
        // console.log('hi it works')
    
        this.setState({name: '', email: '', password: '', confirm_password: '',})
      }

      render(){

      
    return(

        <form onSubmit={this.onSubmit} className="page_div">
        
            <div className="form_div_2">

                <div className="input_label_2">Username</div>
                <input className="input_text" value={this.state.name} onChange={this.onChangeUserName} type={'text'}/>

                <div className="input_label_2">Email</div>
                <input className="input_text" value={this.state.email} onChange={this.onChangeUserEmail} type={'text'}/>

                <div className="input_label_2">Password</div>
                <input className="input_text" value={this.state.password} onChange={this.onChangeUserPassword} type={'password'}/>

                <div className="input_label_2">Confirm Password</div>
                <input className="input_text" value={this.state.confirm_password} onChange={this.onChangeUserConfirm_password} type={'password'}/>

            </div>

            <div className="logIn_btn_div_2">

            <a className="login_btn" href="/login">BACK</a>
            <input className="login_btn" type={'submit'} value ={'FINISHED'}/>
            
        </div>

        </form>

    )

}
}

