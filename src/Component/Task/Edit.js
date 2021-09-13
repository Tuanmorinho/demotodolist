import React, { Component } from 'react'
import { withRouter } from "react-router"
import { iconBack } from '../Img';

class Edit extends Component {
    constructor() {
        super();
        this.state = {
            getTask: [],
            edit: {
                id: '',
                name: '',
                content: '',
                status: ''
            }
        }
    }

    getTaskEdit = async (url) => {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    async getTaskEditData() {
        let data = await this.getTaskEdit('/task/get/' + this.props.match.params.taskID);
        if (data.status === 0) {
            data = {
                ...data,
                status1: 'status-task1',
                status2: 'status-task2 status-task2--disable',
                status3: 'status-task3 status-task3--disable'
            };
        } else if (data.status === 1) {
            data = {
                ...data,
                status1: 'status-task1 status-task1--disable',
                status2: 'status-task2',
                status3: 'status-task3 status-task3--disable'
            };
        } else {
            data = {
                ...data,
                status1: 'status-task1 status-task1--disable',
                status2: 'status-task2 status-task2--disable',
                status3: 'status-task3'
            };
        }
        this.setState({
            getTask: data
        });
    }

    getNewTaskName = (e) => {
        this.setState({ name: e.target.value });
    }

    getNewTaskContent = (e) => {
        this.setState({ content: e.target.value });
    }

    handleCancel = () => {

    }

    handleSave = () => {

    }

    handleBack = () => {
        this.props.history.goBack();
    }

    componentDidMount() {
        const { match, location } = this.props;
        console.log(location, match);

        this.getTaskEditData();
    }

    render() {
        return (
            <div className="listProject">
                <div className="statuss__search">
                    <div className="listProject__btnBack">
                        <button onClick={this.handleBack}><img src={iconBack} alt="" /></button>
                        <h1>Edit task</h1>
                    </div>
                </div>
                <div className='edit-form'>
                    <div className="edit-form__container">
                        <div className="edit-form__header">
                            <h3 className="edit-form__heading">Task: {this.state.getTask.name}</h3>
                        </div>

                        <div className="edit-form__form">
                            <div className="edit-form_input">
                                <label>Name task:</label>
                                <input onChange={this.getNewTaskName} type="text" className="edit-form__input" placeholder="New name task" defaultValue={this.state.getTask.name} />
                            </div>
                            <div className="edit-form_input">
                                <label>Content task:</label>
                                <input onChange={this.getNewTaskContent} type="textarea" className="edit-form__input" placeholder="New content" defaultValue={this.state.getTask.content} />
                            </div>
                            <div className="edit-form__group">
                                <div className="edit-form__group-radio edit-form__group-radio__1">
                                    <input type="radio" className="edit-form__input-radio" name="status" value="TODO" /><label className="radio-label">Todo</label>
                                </div>
                                <div className="edit-form__group-radio edit-form__group-radio__2">
                                    <input type="radio" className="edit-form__input-radio" name="status" value="DOING" /><label className="radio-label">Doing</label>
                                </div>
                                <div className="edit-form__group-radio edit-form__group-radio__3">
                                    <input type="radio" className="edit-form__input-radio" name="status" value="DONE" /><label className="radio-label">Done</label>
                                </div>
                            </div>
                        </div>

                        <div className="edit-form__controls">
                            <button onClick={this.handleSave} className="edit-form__btn submit">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Edit);