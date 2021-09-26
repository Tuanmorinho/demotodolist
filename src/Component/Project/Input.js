import React, { Component } from 'react'
import { url } from '../constant';

export default class Input extends Component {
    constructor() {
        super();
        this.state = {
            "name": ''
        }
    }

    addProject = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    handleGetProject = (e) => {
        this.setState({ name: e.target.value });
    }

    handleSubmit = () => {
        if (this.state.name === "") {
            this.props.addProject(0);
        } else {
            this.addProject(url + '/todolist/project/create', this.state).then(() => {
                this.props.addProject(1);
            });
            this.setState({ name: '' });
        }
    }

    render() {
        return (
            <div className="status">
                <input className="newProject" onChange={this.handleGetProject} value={this.state.name} type="text" placeholder="New project" />
                <button onClick={(value) => { this.handleSubmit(); this.props.addProject(value) }} className="add" type="submit">Add project</button>
            </div>
        )
    }
}