import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={
            isVisible: true
        }
        console.log('in login', this.props.match)
        this.closeComponent = ev => {
            ev.preventDefault();

            this.setState({
                isVisible : false
            })
            setTimeout(() => {
                // this.props.history.push('/login')
            }, 600)
        }
    }
    render(){
        return (
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={this.props.match.path === '/Login' ? 'loadComponent' : 'leaveComponent'}
            >
                {this.state.isVisible ?
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
                                    <div className="ui message" onClick={this.closeComponent}> 
                                        New to us?   
                                        <Link className='signup-button' to='/signup'>
                                            Sign Up
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
                    // <div className="container-fluid">
                    //     <div className="row">
                    //         YI
                    //     </div>
                    // </div>
                    :
                    null
                }
            </ReactCSSTransitionGroup>
        )
    }
}

export default LoginPage;