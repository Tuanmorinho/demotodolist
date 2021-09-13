import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Project from './Project/Project'
import Edit from './Task/Edit'
import Tasks from './Task/Tasks'

export default class Main extends Component {
    render() {
        return (
            <section className="glass">
                <Router>
                    <Route path="/" exact component={Project} />
                    <Route path="/:projectID" exact component={Tasks} />
                    <Route path="/:projectID/:taskID" exact component={Edit} />
                </Router>
            </section>
        )
    }
}