import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SignUpPage extends Component{
    render(){
        return (
            <div className='login-container'>
                <div className="login-card">
                    <div className="title-container">
                        <div className="title">
                        </div>
                    </div>
                    <div className="ui middle aligned center grid sign-up-wrapper">
                        <div className="column">
                            <h2 className="ui teal image header">
                                <div className="content">
                                    Sign Up
                                </div>
                            </h2>
                            <form className="ui large form sign-in-form">
                                <div className="ui">
                                    <div className="field">
                                        <div className="ui left icon input">
                                            <i className="icon user"></i>
                                            <input type="text" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="ui left icon input">
                                            <i className="icon lock"></i>
                                            <input type="password" placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="ui left icon input">
                                            <i className="icon lock"></i>
                                            <input type="password" placeholder="Confirm Password"/>
                                        </div>
                                    </div>
                                    <Link to='/onboarding'>
                                        <div className="ui fluid large teal submit button">Submit</div>
                                    </Link>
                                </div>
                            </form>
                            <div className="ui message error">ERROR</div>
                            <Link to='/login'>
                                <div className="ui back-button">
                                    Back
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpPage;