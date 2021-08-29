import React, { Component } from 'react'
import Input from './Input'
import ListTask from './ListTask'
import { withRouter } from "react-router"

class Tasks extends Component {

    componentDidMount() {
        console.log(this.props.location, this.props.match)
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="listProject">
                <h1>Tasks</h1>
                <button onClick={this.handleBack}>Back</button>
                <Input idProject={this.props.projectID} />
                <ListTask projectID2={this.props.match.params.projectID} />
            </div>
        )
    }
}

export default withRouter(Tasks);