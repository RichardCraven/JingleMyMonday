import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends Component{
    render(){
        return (
            <div className='landing-container'>
                <div className="sign-in">
                    <Link to='/Login'>
                        <div className="sign-in-button"></div>
                        {/* <button className="ui button secondary">SIGN IN</button> */}
                    </Link>
                </div>
                <div className="landing-card">
                    <div className="title-container">
                        <div className="title">
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="content-text">
                            Instill joy & happiness for an otherwise boring Monday with personalized tunes! 
                            <ul>
                                <li>Based on details about your life and social network, our algorithm will build a song about ... you!
                                </li>
                                <li>Sent out every Monday morning, your jingle will show up in your inbox to brighten the start of your week</li>
                                <li>Choose how much personal info you want to provide, and we'll do the rest</li>
                                <li>Makes a great gift for friends and loved ones!</li>
                            </ul>
                            {/* <br/>
                            Based on details about your life and social network, our algorithm will build a song about ... you!
                            <br/>
                            Sent out every Monday morning, your jingle will show up in your inbox to brighten the start of your week
                            <br/>
                            Choose how much personal info you want to provide, and we'll do the rest
                            <br/>
                            Makes a great gift for friends and loved ones! */}
                        </div>
                    </div>
                    <button className="ui primary button love-button">
                        I Love Music
                    </button>
                    <button className="ui button hate-button">
                        I Hate Music
                </button>
                    {/* <button className="love-button">I Love Music</button>
                    <button className="hate-button">I Hate Music</button> */}
                </div>
            </div>
        )
    }
}

export default LandingPage;