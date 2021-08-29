import React, { Component } from 'react'
import ListProjectChild from './ListProjectChild';

export default class ListProject extends Component {
    constructor() {
        super();
        this.isComponentMounted = false;
        this.state = {
            listProject: []
        };
    }

    getListProject = async (url) => {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    async componentDidMount() {
        this.isComponentMounted = true;
        try {
            const data = await this.getListProject("/project/get");
            if (this.isComponentMounted) {
                console.log(data);
                this.setState({
                    listProject: data
                });
            }
        } catch (error) {
            console.log('Failed to fetch data', error);
        }
    }

    getID = (valueID) => {
        this.props.getProjectID2(valueID);
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
    }

    render() {
        return (
            <div className="all">
                <div className="cards">
                    {
                        this.state.listProject.map((value, index) => {
                            return (
                                <ListProjectChild key={index} listProject={value} getID={(valueID) => this.getID(valueID)} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
