import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class LoginPage extends Component{
    render(){
        return (
            <div className='login-container'>
                <div className="login-card">
                    <div className="title-container">
                        <div className="title">
                        </div>
                    </div>
                    <div className="ui middle aligned center grid log-in-wrapper">
                        <div className="column">
                            <h2 className="ui teal image header">
                                <div className="content">
                                    Log In to your account
                                </div>
                            </h2>
                            <form className="ui large form sign-in-form">
                                <div className="ui">
                                    <div className="field">
                                        <div className="ui left icon input">
                                            <i className="icon user"></i>
                                            <input type="text" placeholder="Username"/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="ui left icon input">
                                            <i className="icon lock"></i>
                                            <input type="password" placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className="ui fluid large teal submit button">Login</div>
                                </div>
                            </form>
                            <div className="ui message error">ERROR</div>
                            <div className="ui message"> 
                                New to us?   
                                <Link to='/signup'>
                                <a className="signup-button" href="#"> Sign Up</a>
                                </Link>
                            </div>
                            <Link to='/'>
                            <div className="ui back-button">
                                Back
                            </div>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="ui input">
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="ui input">
                        <input type="text" placeholder="Password"/>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default LoginPage;