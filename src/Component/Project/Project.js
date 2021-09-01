import React, { Component } from 'react'
import Input from './Input'
import ListProject from './ListProject'

export default class Project extends Component {
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
                var sortData = data.sort((a, b) => {
                    return new Date(a.data).getTime() - new Date(b.data).getTime();
                }).reverse();
                this.setState({
                    listProject: sortData
                });
            }
        } catch (error) {
            console.log('Failed to fetch data', error);
        }
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
    }

    onClickAddProject = (value) => {
        if (value === 0) {
            alert('Please enter a project.');
        }
        if (value === 1) {
            this.componentDidMount();
        }
    }

    render() {
        return (
            <div className="listProject">
                <h1>Projects</h1>
                <Input addProject={(value) => this.onClickAddProject(value)} />
                <ListProject listProject={this.state.listProject} />
            </div>
        )
    }
}
