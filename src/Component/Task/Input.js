import React, { Component } from 'react'
import "react-responsive-combo-box/dist/index.css"

export default class Input extends Component {
    constructor() {
        super();
        this.state = {
            projectId: '',
            name: '',
            content: '',
            status: 0
        }
    }

    addTask = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    componentDidMount() {
        this.setState({ projectId: this.props.idProject });
    }

    handleGetTask = (e) => {
        this.setState({ name: e.target.value });
    }

    handleGetContent = (e) => {
        this.setState({ content: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.content === "") {
            alert('Please enter a task.');
        } else {
            this.addTask('/task/create', this.state).then(data => {
                console.log(data);
            });
            this.setState({ name: '', content: '' })
        }
    }

    render() {
        return (
            <div className="status">
                <input onChange={this.handleGetTask} className="newTask" value={this.state.name} type="text" placeholder="New task" />
                <input onChange={this.handleGetContent} className="content" value={this.state.content} type="text" placeholder="Content" />
                <button onClick={this.handleSubmit} className="add" type="button">Add task</button>
            </div>
        )
    }
}
