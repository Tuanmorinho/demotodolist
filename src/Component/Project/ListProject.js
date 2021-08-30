import React, { Component } from 'react'
import ListProjectChild from './ListProjectChild';

export default class ListProject extends Component {
    render() {
        return (
            <div className="all">
                <div className="cards">
                    {
                        this.props.listProject.map((value, index) => {
                            return (
                                <ListProjectChild key={index} listProject={value} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
