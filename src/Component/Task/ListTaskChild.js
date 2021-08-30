import React, { Component } from 'react'

export default class ListTaskChild extends Component {
    constructor() {
        super();
        this.state = {
            projectId: '',
            taskId: ''
        }
    }

    deleteTask = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    componentDidMount() {
        this.setState({ projectId: this.props.listTask.propject, taskId: this.props.listTask._id });
    }

    handleDelete = () => {
        if (this.state.projectId === "" || this.state.taskId === "") {
            alert('This task cannot be deleted.');
        } else {
            this.deleteTask('/task/delete', this.state).then(data => {
                console.log(data);
            });
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-info">
                    <h2>{this.props.listTask.name}</h2>
                    <div className="status-task">Content:&ensp;{this.props.listTask.content}</div>
                    <div className="status-task">Status:
                        <div className={this.props.listTask.status1}>TODO</div>
                        <div className={this.props.listTask.status2}>DOING</div>
                        <div className={this.props.listTask.status3}>DONE</div>
                    </div>
                </div>
                <div className="button">
                    <button className="edit-task">Edit</button>
                    <button onClick={this.handleDelete} className="destroy">Delete</button>
                </div>
            </div>
        )
    }
}