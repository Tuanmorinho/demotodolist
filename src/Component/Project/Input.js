import React, { Component } from 'react'

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

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name === "") {
            alert('Please enter a project.');
        } else {
            this.addProject('/project/create', this.state).then(data => {
                console.log(data);
            });
            this.setState({ name: '' });
        }
    }

    render() {
        return (
            <div className="status">
                <input className="newProject" onChange={this.handleGetProject} value={this.state.name} type="text" placeholder="New project" />
                <button onClick={this.handleSubmit} className="add" type="submit">Add project</button>
            </div>
        )
    }
}