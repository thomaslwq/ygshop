import React, { Component } from 'react'
import "./Login.scss"
import { withRouter } from "react-router-dom"
import axios from "../../utils/axios"
class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    handleRegister = (params) => {
        this.props.history.push("/register")
    }
    saveUserName=(e) => {
        this.setState({
            username: e.target.value
        })
    }
    savePassword=(e) => {
        this.setState({
            password: e.target.value
        })
    }
    // 登陆
    handleLogin = (params) => {
        let username = this.state.username;
        let password = this.state.password;
        if(!username || !password){
            console.log("账号或者密码不能为空！");
            return false;
        }
        let url = "loginCheck?username="+username+"&&password="+password;
        axios.get(url).then(res=>{
            console.log(res);
            localStorage.setItem("userinfo",JSON.stringify(res.wdata));
            this.props.history.push("/my");
        }).catch(err=>console.log(err))
    }
    
    
    render() {
        return (
            <div className="yg-login">
                <input type="text"
                    value={this.state.username}
                    name="" id="" placeholder="账号"
                    onChange={this.saveUserName}
                    />
                <input type="password"
                    value={this.state.password}
                    onChange={this.savePassword}
                    name="" id="" placeholder="密码" />
                <div className="yg-login-btn"
                onClick={this.handleLogin}
                >登陆</div>
                <h1 onClick={this.handleRegister}>注册</h1>
            </div>
        )
    }
}
export default withRouter(Login)
