import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class OnboardingPage extends Component{
    constructor(props){
        super(props)
        // this.state = { form: props.initialState }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    // super(props)
    state = {
        iterator: 0,
        friend1: '',
        friend2: '',
        friend3: '',
        pet1: '',
        pet2: '',
        pet3: '',
        hobby1: '',
        hobby2: '',
        hobby3: '',
        farthest: '',
        dreamVacation : '',
        grewUp : '',
        scaredKid : '',
        scaredNow : '',
        bossName : ''
    }
    // type Data = {
    //     firstName: string,
    //     lastName: string,
    //     userName: string,
    //     confirmUserName: string,
    //     notifications: boolean,
    //   }
    // function FormItem({})
    stepForward() {
        console.log('WTF, this is ', this)
        this.setState({
            iterator : this.state.iterator + 1
        })
    }
    handleChange(e) {
        const target = e.target
        const name = target.name
        const value = target.type === 'checkbox'
        ? target.checked
        : target.value

        // this.setState(state => ({form: {...state.form, ...{[name] : value}}}))
        this.setState({
          [ target.name]: target.type === 'checkbox' 
            ? target.checked 
            : target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(JSON.stringify(this.state, null, 4))
    }
    render(){
        return (
            <div className='login-container'>
                <div className="login-card">
                    <div className="title-container">
                        <div className="title">
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit} className="ui large form sign-in-form">
                        {this.state.iterator === 0 &&
                        <div>
                            <h2 className="ui teal image header">
                                <div className="content">
                                    Who are some of your friends?
                                </div>
                            </h2>
                            <div className="ui">
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text"
                                        name="friend1"
                                        value={this.state.friend1}
                                        onChange={this.handleChange}
                                        placeholder="Friend #1"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text" 
                                        name="friend2"
                                        value={this.state.friend2}
                                        onChange={this.handleChange}
                                        placeholder="Friend #2"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text" 
                                        name="friend3"
                                        value={this.state.friend3}
                                        onChange={this.handleChange}
                                        placeholder="Friend #3"
                                        />
                                    </div>
                                </div>
                                
                                <div onClick={this.stepForward.bind(this)} className="ui fluid large teal submit button">Continue</div>
                            </div>
                        </div>
                        }
                        {this.state.iterator === 1 &&
                        <div>
                            <h2 className="ui teal image header">
                                <div className="content">
                                    Do you have pets?
                                </div>
                            </h2>
                            <div className="ui">
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text"
                                        name="pet1"
                                        value={this.state.pet1}
                                        onChange={this.handleChange}
                                        placeholder="Pet #1"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text" 
                                        name="pet2"
                                        value={this.state.pet2}
                                        onChange={this.handleChange}
                                        placeholder="Pet #2"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text" 
                                        name="pet3"
                                        value={this.state.pet3}
                                        onChange={this.handleChange}
                                        placeholder="Pet #3"
                                        />
                                    </div>
                                </div>
                                
                                <div onClick={this.stepForward.bind(this)} className="ui fluid large teal submit button">Continue</div>
                            </div>
                        </div>
                        }
                        {this.state.iterator === 2 &&
                        <div>
                            <h2 className="ui teal image header">
                                <div className="content">
                                    Some hobbies?
                                </div>
                            </h2>
                            <div className="ui">
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text"
                                        name="hobby1"
                                        value={this.state.hobby1}
                                        onChange={this.handleChange}
                                        placeholder="Hobby #1"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text" 
                                        name="hobby2"
                                        value={this.state.hobby2}
                                        onChange={this.handleChange}
                                        placeholder="Hobby #2"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text" 
                                        name="hobby3"
                                        value={this.state.hobby3}
                                        onChange={this.handleChange}
                                        placeholder="Hobby #3"
                                        />
                                    </div>
                                </div>
                                
                                <div onClick={this.stepForward.bind(this)} className="ui fluid large teal submit button">Continue</div>
                            </div>
                        </div>
                        }
                        {this.state.iterator === 3 &&
                        <div>
                            <h2 className="ui teal image header">
                                <div className="content">
                                    Extras
                                </div>
                            </h2>
                            <div className="ui">
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text"
                                        name="grewUp"
                                        value={this.state.grewUp}
                                        onChange={this.handleChange}
                                        placeholder="Where'd you grow up?"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text" 
                                        name="dreamVacation"
                                        value={this.state.dreamVacation}
                                        onChange={this.handleChange}
                                        placeholder="Dream vacation destination?"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text" 
                                        name="farthest"
                                        value={this.state.farthest}
                                        onChange={this.handleChange}
                                        placeholder="Farthest away from home you've been"
                                        />
                                    </div>
                                </div>
                                
                                <div onClick={this.stepForward.bind(this)} className="ui fluid large teal submit button">Continue</div>
                            </div>
                        </div>
                        }
                        {this.state.iterator === 4 &&
                        <div>
                            <h2 className="ui teal image header">
                                <div className="content">
                                    Extras 2
                                </div>
                            </h2>
                            <div className="ui">
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text"
                                        name="scaredKid"
                                        value={this.state.scaredKid}
                                        onChange={this.handleChange}
                                        placeholder="What scared you as a kid?"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text" 
                                        name="scaredNow"
                                        value={this.state.scaredNow}
                                        onChange={this.handleChange}
                                        placeholder="What scares you now?"
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left input">
                                        <input 
                                        type="text" 
                                        name="bossName"
                                        value={this.state.bossName}
                                        onChange={this.handleChange}
                                        placeholder="What's your boss's name?"
                                        />
                                    </div>
                                </div>
                                
                                {/* <div type="submit"  className="ui fluid large teal submit button">Submit</div> */}
                                <button className="ui fluid large teal submit button" type="submit">SUBMIT</button>
                            </div>
                        </div>
                        }
                        {/* <button className="ui fluid large teal submit button" type="submit">SUBMIT</button> */}
                    </form>
                    <Link to='/'>
                        <div className="ui back-button">
                            Finish Later
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default OnboardingPage;