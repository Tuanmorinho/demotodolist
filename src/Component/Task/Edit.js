import React, { Component } from 'react'

export default class Edit extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            content: '',
            status: ''
        }
    }


    getNewTaskName = (e) => {
        this.setState({name: e.target.value});
    }

    getNewTaskContent = (e) => {
        this.setState({content: e.target.value});
    }

    render() {
        return (
            <div className="edit-form">
                <div className="edit-form__container">
                    <div className="edit-form__header">
                        <h3 className="edit-form__heading">Edit task</h3>
                    </div>

                    <div className="edit-form__form">
                        <input onChange={this.getNewTaskName} type="text" className="edit-form__input" placeholder="Name task" value={this.props.contentTask.name}/>
                        <input onChange={this.getNewTaskContent} type="textarea" className="edit-form__input" placeholder="Content" value={this.props.contentTask.content}/>
                        <div className="edit-form__group">
                            <div className="edit-form__group-radio">
                                <input type="radio" className="edit-form__input-radio" value="TODO" /><label className="radio-label radio-label__1">Todo</label>
                            </div>
                            <div className="edit-form__group-radio">
                                <input type="radio" className="edit-form__input-radio" value="DOING" /><label className="radio-label radio-label__2">Doing</label>
                            </div>
                            <div className="edit-form__group-radio">
                                <input type="radio" className="edit-form__input-radio" value="DONE" /><label className="radio-label radio-label__3">Done</label>
                            </div>
                        </div>
                    </div>

                    <div className="edit-form__controls">
                        <button className="edit-form__btn cancel">Cancel</button>
                        <button className="edit-form__btn submit">Save</button>
                    </div>
                </div>
            </div>
        )
    }
}
