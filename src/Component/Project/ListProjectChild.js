import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ListProjectChild extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-info">
                    <h2>{this.props.listProject.name}</h2>
                    <div className="status-task">Tasks:&ensp;<span>{this.props.listProject.todolist.length}</span></div>
                </div>
                <div className="button">
                    <Link to={"/" + this.props.listProject._id}><button onClick={() => this.props.getID(this.props.listProject._id)} className="edit-task">Open</button></Link>
                </div>
            </div>
        )
    }
}