import React, { Component } from 'react'

export default class EditForm extends Component {
    render() {
        return (
            <div className="edit">
                <div className="edit__input">
                    <label>
                        Name task:&ensp;<input className="edit__task" type="text" />
                    </label>
                    <label>
                        Content:&ensp;<input className="edit__content" type="textarea" />
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value={0} />
                        Todo
                    </label>
                    <label>
                        <input type="radio" value={1} />
                        Doing
                    </label>
                    <label>
                        <input type="radio" value={2} />
                        Done
                    </label>
                </div>
                <button className="edit__btn" type="button">Save</button>
            </div>
        )
    }
}
