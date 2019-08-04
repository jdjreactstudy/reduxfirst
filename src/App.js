import React from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux'
import './App.css';
import Timer from './component/Timer'



class App extends React.Component {


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    </a>
                    <Timer></Timer>
                </header>
            </div>
        );
    }
}
export default App;