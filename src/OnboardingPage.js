import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class OnboardingPage extends Component{
    state = {
        iterator: 0,
        userData : []
    }
    // function FormItem({})
    stepForward() {
        console.log('WTF, this is ', this)
        this.setState({
            iterator : this.state.iterator + 1
        })
    }
    render(){
        return (
            <div className='login-container'>
                <div className="login-card">
                    <div className="title-container">
                        <div className="title">
                        </div>
                    </div>
                    {this.state.iterator === 0 &&
                        <div className="ui middle aligned center grid onboarding-wrapper">
                            <div className="column">
                                <h2 className="ui teal image header">
                                    <div className="content">
                                        Who are some of your friends?
                                    </div>
                                </h2>
                                <form className="ui large form sign-in-form">
                                    <div className="ui">
                                        <div className="field">
                                            <div className="ui left input">
                                                <input type="text" placeholder="Friend #1"/>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui left input">
                                                <input type="text" placeholder="Friend #2"/>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui left input">
                                                <input type="text" placeholder="Friend #3"/>
                                            </div>
                                        </div>
                                        
                                            <div onClick={this.stepForward.bind(this)} className="ui fluid large teal submit button">Continue</div>
                                        
                                    </div>
                                </form>
                                <div className="ui message error">ERROR</div>
                                <Link to='/'>
                                    <div className="ui back-button">
                                        Finish Later
                                    </div>
                                </Link>
                            </div>
                        </div>
                    }
                    {this.state.iterator === 1 &&
                        <div className="ui middle aligned center grid onboarding-wrapper">
                            <div className="column">
                                <h2 className="ui teal image header">
                                    <div className="content">
                                        Who are your pets?
                                    </div>
                                </h2>
                                <form className="ui large form sign-in-form">
                                    <div className="ui">
                                        <div className="field">
                                            <div className="ui left input">
                                                <input type="text" placeholder="Pet #1"/>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui left input">
                                                <input type="text" placeholder="Pet #2"/>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui left input">
                                                <input type="text" placeholder="Pet #3"/>
                                            </div>
                                        </div>
                                        
                                            <div onClick={this.stepForward.bind(this)} className="ui fluid large teal submit button">Continue</div>
                                        
                                    </div>
                                </form>
                                <div className="ui message error">ERROR</div>
                                <Link to='/'>
                                    <div className="ui back-button">
                                        Finish Later
                                    </div>
                                </Link>
                            </div>
                        </div>
                    }
                    {this.state.iterator === 2 &&
                        <div className="ui middle aligned center grid onboarding-wrapper">
                            <div className="column">
                                <h2 className="ui teal image header">
                                    <div className="content">
                                        Hobbies
                                    </div>
                                </h2>
                                <form className="ui large form sign-in-form">
                                    <div className="ui">
                                        <div className="field">
                                            <div className="ui left input">
                                                <input type="text" placeholder="Hobby #1"/>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui left input">
                                                <input type="text" placeholder="Hobby #2"/>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui left input">
                                                <input type="text" placeholder="Hobby #3"/>
                                            </div>
                                        </div>
                                            <div onClick={this.stepForward.bind(this)} className="ui fluid large teal submit button">Continue</div>
                                    </div>
                                </form>
                                <div className="ui message error">ERROR</div>
                                <Link to='/'>
                                    <div className="ui back-button">
                                        Finish Later
                                    </div>
                                </Link>
                            </div>
                        </div>
                    }
                    {this.state.iterator === 3 &&
                        <div className="ui middle aligned center grid onboarding-wrapper">
                            <div className="column">
                                <h2 className="ui teal image header">
                                    <div className="content">
                                        Extras
                                    </div>
                                </h2>
                                <form className="ui large form sign-in-form">
                                    <div className="ui">
                                        <div className="field">
                                            <div className="ui left input">
                                                <input type="text" placeholder="Where'd you grow up?"/>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui left input">
                                                <input type="text" placeholder="Dream vacation destination?"/>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="ui left input">
                                                <input type="text" placeholder="What's an animal that scares you?"/>
                                            </div>
                                        </div>
                                            <div onClick={this.stepForward.bind(this)} className="ui fluid large teal submit button">Continue</div>
                                    </div>
                                </form>
                                <div className="ui message error">ERROR</div>
                                <Link to='/'>
                                    <div className="ui back-button">
                                        Finish Later
                                    </div>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default OnboardingPage;