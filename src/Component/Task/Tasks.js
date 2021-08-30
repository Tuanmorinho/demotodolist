import React, { Component } from 'react'
import Input from './Input'
import ListTask from './ListTask'
import { withRouter } from "react-router"
import { iconBack } from '../Img'

class Tasks extends Component {
    constructor() {
        super();
        this.isComponentMounted = false;
        this.state = {
            listTask: []
        };
    }

    getListTask = async (url) => {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json()
    }

    async componentDidMount() {
        this.isComponentMounted = true;
        try {
            const data = await this.getListTask("/task/get");
            if (this.isComponentMounted) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].status === 0) {
                        data[i] = {
                            ...data[i],
                            status1: 'status-task1',
                            status2: 'status-task2 status-task2--disable',
                            status3: 'status-task3 status-task3--disable'
                        };
                    } else if (data[i].status === 1) {
                        data[i] = {
                            ...data[i],
                            status1: 'status-task1 status-task1--disable',
                            status2: 'status-task2',
                            status3: 'status-task3 status-task3--disable'
                        };
                    } else {
                        data[i] = {
                            ...data[i],
                            status1: 'status-task1 status-task1--disable',
                            status2: 'status-task2 status-task2--disable',
                            status3: 'status-task3'
                        };
                    }
                }
                let newData = [];
                let newData2 = [];
                for (i = 0; i < data.length; i++) {
                    if (data[i].project === this.props.match.params.projectID) {
                        newData2 = [...newData2, ...newData.concat(data[i])];
                    }
                }
                var sortData = newData2.sort((a, b) => {
                    return new Date(a.newData2).getTime() - new Date(b.newData2).getTime();
                }).reverse();
                this.setState({ listTask: sortData });
            }
        } catch (error) {
            console.log('Failed to fetch data', error);
        }
        console.log(this.props.location, this.props.match);
    }

    // updateListTask = (vlaueee) => {

    // }

    componentWillUnmount() {
        this.isComponentMounted = false;
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    onClickAddTask = (value) => {
        if (value === 'null') {
            alert('Please enter a task.');
        }
        if (value === 'clicked') {
            this.componentDidMount(() => {
                this.componentDidMount();
            });
            console.log("toang lần 2");
        }
    }

    render() {
        return (
            <div className="listProject">
                <div className="listProject__btnBack">
                    <button onClick={this.handleBack}><img src={iconBack} alt="" /></button>
                    <h1>Tasks</h1>
                </div>
                <Input idProject={this.props.match.params.projectID} addTask={(value) => this.onClickAddTask(value)} />
                <ListTask listTask={this.state.listTask} />
            </div>
        )
    }
}

export default withRouter(Tasks);