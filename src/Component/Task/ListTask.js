import React, { Component } from 'react'
import ListTaskChild from './ListTaskChild'

export default class ListTask extends Component {
    render() {
        return (
            <div className="all">
                <div className="cards">
                    {
                        this.props.listTask.map((value, index) => {
                            return (
                                <ListTaskChild key={index} listTask={value} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
