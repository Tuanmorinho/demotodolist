import React, { Component } from 'react'
import { avatar1, avatar4 } from './Img';
import TeamMemberChild from './TeamMemberChild';

export default class TeamMembers extends Component {
    constructor() {
        super();
        this.state = {
            memberInf: [
                {
                    "avar": avatar1,
                    "name": "Tuan",
                    "position": "Leader"
                },
                {
                    "avar": avatar4,
                    "name": "Duc",
                    "position": "Member"
                }
            ]
        }
    }
    render() {
        return (
            <section className="glass2">
                <h1>Team members</h1>
                <div className="member">
                    {
                        this.state.memberInf.map((value, index) => {
                            return (
                                <TeamMemberChild key={index} memberInf={value} />
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}