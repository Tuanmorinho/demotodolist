import React, { Component } from 'react'
import ListTaskChild from './ListTaskChild'
import Edit from './Edit'

export default class ListTask extends Component {
    render() {
        return (
            <div className="all">
                <div className="cards">
                    {
                        this.props.listTask.map((valueListTask, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <ListTaskChild listTask={valueListTask} updateTask2={(value) => this.props.updateTask(value)} />
                                    <Edit contentTask={valueListTask} editTask={(value) => this.props.updateTask(value)} />
                                </React.Fragment>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
