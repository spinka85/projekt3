import React from 'react';
// import './App.css';
import Home from "./components/Home/Home";
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </Router>
            </header>
        </div>

    );
}

export default App;
