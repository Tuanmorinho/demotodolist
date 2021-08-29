import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Project from './Project/Project'
import Tasks from './Task/Tasks'

export default class Main extends Component {
    //Demo GIT
    render() {
        return (
            <section className="glass">
                <Router>
                    <Route path="/" exact
                        render={props => <Project {...props} getProjectID={(valueID) => this.getProjectID(valueID)} />}
                    />
                    <Route path="/:projectID" exact
                        render={props => <Tasks {...props} projectID={this.state.projectID} />}
                    />
                </Router>
            </section>
        )
    }
}