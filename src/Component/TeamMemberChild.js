import React, { Component } from 'react';

export default class TeamMemberChild extends Component {
    render() {
        return (
            <div className="member1">
                <img src={this.props.memberInf.avar} alt="" />
                <h3>{this.props.memberInf.name}</h3>
                <p>{this.props.memberInf.position}</p>
            </div>
        )
    }
}