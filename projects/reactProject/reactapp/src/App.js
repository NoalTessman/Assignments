
import { Component } from "react";
import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Authors from "./Components/Authors"
import AuthorPoemList from "./Components/AuthorPoemList";
import homeText from "./Components/homeText"
import PoemDisplay from "./Components/PoemDisplay";

class App extends Component {
    render() {
        return (
            <div id="bg">
            <div id="container">
                <div id="AuthorTitle">
                    <div id="SpinnyBoi">
                        <Link to="/" id="HomeBoi">
                    Poetry DB User Interface
                        </Link>
                    </div>
            </div>
            <Link to="/Authors" id="AuthorTitle">
                    Poem Finder
                </Link>
                <Switch>
                    <Route exact path="/" component={homeText} />
                    <Route exact path="/Authors" component={Authors} />
                    <Route exact path="/Authors/:name" component={AuthorPoemList}/>
                    <Route path="/Authors/:name/:poem" component={PoemDisplay}/>
                    {/* render a component called Poems inside of Route */}
                </Switch>
            </div>
            </div>
        )
    }
}

export default App
