import React, { Component } from 'react'

export default class Edit extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            content: 0,
            status: ''
        }
    }

    getNewTaskName = (e) => {
        this.setState({ name: e.target.value });
    }

    getNewTaskContent = (e) => {
        this.setState({ content: e.target.value });
    }

    handleCancel = () => {
        this.props.cancel("edit-form disable-edit");
    }

    handleSave = () => {
        
    }

    render() {
        return (
            <div className={this.props.showEditForm}>
                <div className="edit-form__container">
                    <div className="edit-form__header">
                        <h3 className="edit-form__heading">Edit task</h3>
                    </div>

                    <div className="edit-form__form">
                        <input onChange={this.getNewTaskName} type="text" className="edit-form__input" placeholder="Name task" />
                        <input onChange={this.getNewTaskContent} type="textarea" className="edit-form__input" placeholder="Content" />
                        <div className="edit-form__group">
                            <div className="edit-form__group-radio edit-form__group-radio__1">
                                <input type="radio" className="edit-form__input-radio" value="TODO" /><label className="radio-label">Todo</label>
                            </div>
                            <div className="edit-form__group-radio edit-form__group-radio__2">
                                <input type="radio" className="edit-form__input-radio" value="DOING" /><label className="radio-label">Doing</label>
                            </div>
                            <div className="edit-form__group-radio edit-form__group-radio__3">
                                <input type="radio" className="edit-form__input-radio" value="DONE" /><label className="radio-label">Done</label>
                            </div>
                        </div>
                    </div>

                    <div className="edit-form__controls">
                        <button onClick={this.handleCancel} className="edit-form__btn cancel">Cancel</button>
                        <button onClick={this.handleSave} className="edit-form__btn submit">Save</button>
                    </div>
                </div>
            </div>
        )
    }
}
