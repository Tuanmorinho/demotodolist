import React, { Component } from 'react'
import ListTaskChild from './ListTaskChild'

export default class ListTask extends Component {
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
                    if (data[i].project === this.props.projectID2) {
                        newData2 = [...newData2, ...newData.concat(data[i])];
                    }
                }
                this.setState({ listTask: newData2 });
            }
        } catch (error) {
            console.log('Failed to fetch data', error);
        }
    }

    updateListTask = (vlaueee) => {
        
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
    }

    render() {
        return (
            <div className="all">
                <div className="cards">
                    {
                        this.state.listTask.map((value, index) => {
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
