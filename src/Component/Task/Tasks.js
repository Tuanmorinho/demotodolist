import React, { Component } from 'react'
import { search1x } from '../Img';
import Input from './Input'
import ListTask from './ListTask'
import { withRouter } from "react-router"
import { iconBack } from '../Img'

class Tasks extends Component {
    constructor() {
        super();
        this.isComponentMounted = false;
        this.state = {
            listTask: [],
            nameTask: ''
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

    searchTask = async (url) => {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    handleSearchTask = (e) => {
        this.setState({ nameTask: e.target.value });
    }

    handleSearch = () => {
        if (this.state.nameTask === '') {
            this.componentDidMount(0);
        } else {
            this.componentDidMount(1);
        }
    }

    async getData() {
        const data = await this.getListTask("/task/get");
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

    async getSearchData() {
        const data2 = await this.getListTask("/task/get");
        let dataSearch1 = [];
        let dataSearch2 = [];
        for (var i = 0; i < data2.length; i++) {
            if (data2[i].project === this.props.match.params.projectID
                && data2[i].name === this.state.nameTask) {
                dataSearch2 = [...dataSearch1, ...dataSearch2.concat(await this.searchTask('/task/get/' + data2[i]._id))];
            }
        }
        for (i = 0; i < dataSearch2.length; i++) {
            if (dataSearch2[i].status === 0) {
                dataSearch2[i] = {
                    ...dataSearch2[i],
                    status1: 'status-task1',
                    status2: 'status-task2 status-task2--disable',
                    status3: 'status-task3 status-task3--disable'
                };
            } else if (dataSearch2[i].status === 1) {
                dataSearch2[i] = {
                    ...dataSearch2[i],
                    status1: 'status-task1 status-task1--disable',
                    status2: 'status-task2',
                    status3: 'status-task3 status-task3--disable'
                };
            } else {
                dataSearch2[i] = {
                    ...dataSearch2[i],
                    status1: 'status-task1 status-task1--disable',
                    status2: 'status-task2 status-task2--disable',
                    status3: 'status-task3'
                };
            }
        }
        var sortData2 = dataSearch2.sort((a, b) => {
            return new Date(a.dataSearch2).getTime() - new Date(b.dataSearch2).getTime();
        }).reverse();
        this.setState({
            listTask: sortData2
        });
        this.setState({ nameTask: '' });
    }

    componentDidMount(sign) {
        this.isComponentMounted = true;
        try {
            if (this.isComponentMounted) {
                if (sign === 0) {
                    this.getData();
                } else if (sign === 1) {
                    this.getSearchData();
                } else {
                    this.getData();
                }
            }
        } catch (error) {
            console.log('Failed to fetch data', error);
        }
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    onClickUpdateTask = (value) => {
        if (value === 0) {
            alert('Please enter a task.');
        }
        if (value === 1) {
            this.componentDidMount(0);
        }
        if (value === 2) {
            alert('This task cannot be deleted.');
        }
    }

    render() {
        return (
            <div className="listProject">
                <div className="statuss__search">
                    <div className="listProject__btnBack">
                        <button onClick={this.handleBack}><img src={iconBack} alt="" /></button>
                        <h1>Tasks</h1>
                    </div>
                    <div className="statuss">
                        <input onChange={this.handleSearchTask} className="newProject" value={this.state.nameTask} type="text" placeholder="Search" />
                        <button onClick={this.handleSearch} className="search" type="submit"><img src={search1x} alt='' /></button>
                    </div>
                </div>
                <Input idProject={this.props.match.params.projectID} updateTask={(value) => this.onClickUpdateTask(value)} />
                <ListTask urlProject={this.props.location.pathname} listTask={this.state.listTask} updateTask={(value) => this.onClickUpdateTask(value)} />
            </div>
        )
    }
}

export default withRouter(Tasks);