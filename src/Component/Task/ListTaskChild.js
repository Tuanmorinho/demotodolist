import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ListTaskChild extends Component {
    constructor() {
        super();
        this.state = {
            projectId: "",
            taskId: ""
        }
    }

    deleteTask = async (url, data = '') => {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            if (this.props.listTask.project === "" || this.props.listTask._id === "") {
                this.props.updateTask2(2);
            } else {
                this.setState({ projectId: this.props.listTask.project, taskId: this.props.listTask._id }, () => {
                    this.deleteTask('/task/delete', this.state).then(() => {
                        this.props.updateTask2(1);
                    });
                });
            }
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
                    <Link to={`${this.props.urlProject2}/${this.props.listTask._id}`}><button className="edit-task">Edit</button></Link>
                    <button onClick={(value) => { this.handleDelete(); this.props.updateTask2(value) }} className="destroy">Delete</button>
                </div>
            </div>
        )
    }
}