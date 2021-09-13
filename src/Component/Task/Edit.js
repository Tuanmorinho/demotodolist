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

    editTask = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    async getTaskEditData() {
        const data = await this.getTaskEdit('/task/get/' + this.props.match.params.taskID);
        this.setState({
            getTask: data
        });
    }

    getNewTaskName = (e) => {
        this.setState({ edit: { ...this.state.edit, name: e.target.value } });
    }

    getNewTaskContent = (e) => {
        this.setState({ edit: { ...this.state.edit, content: e.target.value } });
    }

    handleCheck = (e) => {
        this.setState({ edit: { ...this.state.edit, status: e.target.value } }, () => {
            this.render()
        });
    }

    handleSave = () => {
        if (this.state.edit.name === '' || this.state.edit.name === '') {
            alert('Name or content of task is being empty.');
        } else {
            this.editTask('/task/edit', this.state.edit).then(() => {
                this.props.history.goBack();
            })
        }
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    componentDidMount() {
        this.getTaskEditData().then(() => {
            this.setState({ edit: { ...this.state.edit, id: this.props.match.params.taskID } });
            this.setState({ edit: { ...this.state.edit, name: this.state.getTask.name } });
            this.setState({ edit: { ...this.state.edit, content: this.state.getTask.content } });
            this.setState({ edit: { ...this.state.edit, status: this.state.getTask.status } });
        });
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
                                <input
                                    onChange={this.getNewTaskName}
                                    type="text" className="edit-form__input"
                                    placeholder="New name task"
                                    defaultValue={this.state.getTask.name}
                                />
                            </div>
                            <div className="edit-form_input">
                                <label>Content task:</label>
                                <input
                                    onChange={this.getNewTaskContent}
                                    type="textarea" className="edit-form__input"
                                    placeholder="New content"
                                    defaultValue={this.state.getTask.content}
                                />
                            </div>
                            <div className="edit-form__group">
                                <div className="edit-form__group-radio edit-form__group-radio__1">
                                    <input
                                        type="radio"
                                        className="edit-form__input-radio"
                                        name="status"
                                        value={0}
                                        onChange={this.handleCheck}
                                    />
                                    <label className="radio-label">Todo</label>
                                </div>
                                <div className="edit-form__group-radio edit-form__group-radio__2">
                                    <input
                                        type="radio"
                                        className="edit-form__input-radio"
                                        name="status"
                                        value={1}
                                        onChange={this.handleCheck}
                                    />
                                    <label className="radio-label">Doing</label>
                                </div>
                                <div className="edit-form__group-radio edit-form__group-radio__3">
                                    <input
                                        type="radio"
                                        className="edit-form__input-radio"
                                        name="status"
                                        value={2}
                                        onChange={this.handleCheck}
                                    />
                                    <label className="radio-label">Done</label>
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