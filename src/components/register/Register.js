import React, { Component } from 'react'
import "./register.scss"
import { withRouter } from "react-router-dom"
import axios from "../../utils/axios"
class Register extends Component {
    state = {
        phone: "", // 用户名
        password:"", //密码
        code:"", //验证码
        count: 60,// 60 秒倒计时
        code_msg: "发送验证码",

    }
    timeId = null; // 定时器
    countIntervalId = null; // 计数器
    handleLogin = () => {
        this.props.history.push("/login")
    }
    handleCodeSend = (params) => {
        console.log("点击了验证码");
        let is_valid = this.checkPhone(this.state.phone) ? true : false;
        if (is_valid) {
            // 发请求获取验证码 做节流
            console.log("输入号码有效！");
            if (!this.timeId) {
                axios.get("getMobileCode?mobile=" + this.state.phone).then(res => {
                    console.log(res)
                }).catch(err => console.log(err))
                this.timeId = setTimeout(() => {
                    this.timeId = null;
                    clearInterval(this.countIntervalId);
                    // 更新计数 的基数
                    this.setState({
                        count:60
                    })
                }, 60 * 1000);
                // 设置计数器
                this.countIntervalId = setInterval(() => {
                    this.setState({
                        count: this.state.count - 1
                    })

                }, 1000)
            }
        } else {
            console.log("输入的号码有误，请重新输入！");
        }

    }
    // 获取电话号码
    savePhone = (e) => {
        console.log(e.target.value);
        this.setState({
            phone: e.target.value
        })
    }
    // 检查号码的 合法性
    checkPhone = (mobile) => {
        // 座机
        // var tel = /^0\d{2,3}-?\d{7,8}$/;
        // 电话
        var phone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (mobile.length === 11) {//手机号码
            if (phone.test(mobile)) {
                // console.log(mobile);
                return true;
            }
        }
        // else if(mobile.length == 13 && mobile.indexOf("-") != -1 ){//电话号码
        //   if(tel.test(mobile)) {
        //     console.log(mobile);
        //     return true;
        //   }
        // }

        return false;
    }
    // 保存验证码
    saveCode=(e) => {
        this.setState({
            code:e.target.value
        })
    }
    // 保存密码
    savePassword=(e) => {
        this.setState({
            password: e.target.value
        })
    }
    // 注册
    handleRegister=(e) => {
        let username = this.state.phone;
        let code = this.state.code;
        let password = this.state.password;
        if(!username||!code||!password){
            console.log("用户名或者验证码或者密码不能为空")
            return false;
        }
        let url = "createUser?mobile="+username+"&&username="+username+"&&code="+code+"&&password="+password;
        axios.get(url).then(res=>{
            console.log(res.msg);
            if(res.ret === 0 ){
                this.props.history.push("/login");
            }
        }).catch(err=>console.log(err));
    }
    
    

    render() {
        return (
            <div className="yg-register">
                <input type="number" value={this.state.phone} onChange={this.savePhone}  name="" placeholder="手机" />
                <div className="yg-register-msg">
                    <input type="number" name="" value={this.state.code} 
                    onChange={this.saveCode}
                    />
                    <button className="register-msg-send" onClick={this.handleCodeSend}>{this.timeId ? this.state.count + "秒" : this.state.code_msg}</button>
                </div>
                <input type="password" name=""
                value={this.state.password}
                onChange={this.savePassword}
                placeholder="密码" />
                <div className="yg-register-btn" onClick={this.handleRegister}>注册</div>
                <h1 onClick={this.handleLogin}>登陆</h1>
            </div>
        )
    }
}
export default withRouter(Register)