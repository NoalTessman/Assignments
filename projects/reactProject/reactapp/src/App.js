
import { Component } from "react";
import React from 'react'
import { BrowserRouter as Router, Link, NavLink, Redirect, Switch, Route } from 'react-router-dom'
import Authors from "./Components/Authors"
import AuthorPoemList from "./Components/AuthorPoemList";
import homeText from "./Components/homeText"
import PoemDisplay from "./Components/PoemDisplay";

class App extends Component {
    render() {
        return (
            <div id="container">
                <div id="AuthorTitle">
                    <div id="SpinnyBoi">
                        <Link to="/" id="HomeBoi">
                    I Ruin Poetry
                        </Link>
                    </div>
            </div>
                <Switch>
                    <Route exact path="/" component={homeText} />
                    <Route exact path="/Authors" component={Authors} />
                    <Route exact path="/Authors/:name" component={AuthorPoemList}/>
                    <Route path="/Authors/:name/:poem" component={PoemDisplay}/>
                    {/* render a component called Poems inside of Route */}
                </Switch>
                <Link to="/Authors" id="AuthorTitle">
                    Poem Finder
                </Link>
                <div id="AuthorTitle">
                    Markov Chain Generator
                </div>
            </div>
        )
    }
}

export default App
