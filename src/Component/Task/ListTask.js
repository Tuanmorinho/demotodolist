import React, { Component } from 'react'
import ListTaskChild from './ListTaskChild'

export default class ListTask extends Component {
    render() {
        return (
            <div className="all">
                <div className="cards">
                    {
                        this.props.listTask.map((valueListTask, index) => {
                            return (
                                <ListTaskChild key={index} listTask={valueListTask} updateTask2={(value) => this.props.updateTask(value)} urlProject2={this.props.urlProject} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
