import React, { Component } from 'react'
import { search1x } from '../Img';
import Input from './Input'
import ListProject from './ListProject'

export default class Project extends Component {
    constructor() {
        super();
        this.isComponentMounted = false;
        this.state = {
            listProject: [],
            nameProject: ''
        }
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

    searchProject = async (url) => {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    handleSearchProject = (e) => {
        this.setState({ nameProject: e.target.value });
    }

    handleSearch = () => {
        if (this.state.nameProject === "") {
            this.componentDidMount(0);
        } else {
            this.componentDidMount(1);
        }
    }

    async getData() {
        const data = await this.getListProject('/project/get');
        var sortData = data.sort((a, b) => {
            return new Date(a.data).getTime() - new Date(b.data).getTime();
        }).reverse();
        this.setState({
            listProject: sortData
        });
    }

    async getSearchData() {
        const data2 = await this.getListProject('/project/get');
        let dataSearch1 = [];
        let dataSearch2 = [];
        for (var i = 0; i < data2.length; i++) {
            if (data2[i].name === this.state.nameProject) {
                dataSearch2 = [...dataSearch1, ...dataSearch2.concat(await this.searchProject('/project/get/' + data2[i]._id))];
            }
        }
        var sortData2 = dataSearch2.sort((a, b) => {
            return new Date(a.dataSearch2).getTime() - new Date(b.dataSearch2).getTime();
        }).reverse();
        this.setState({
            listProject: sortData2
        });
        this.setState({ nameProject: '' });
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

    onClickUpdateListProject = (value) => {
        if (value === 0) {
            alert('Please enter a project.');
        }
        if (value === 1) {
            this.componentDidMount(0);
        }
    }

    render() {
        return (
            <div className="listProject">
                <div className="statuss__search">
                    <div className="listProject__btnBack">
                        <h1>Projects</h1>
                    </div>
                    <div className="statuss">
                        <input onChange={this.handleSearchProject} className="newProject" value={this.state.nameProject} type="text" placeholder="Search" />
                        <button onClick={this.handleSearch} className="search" type="submit"><img src={search1x} alt='' /></button>
                    </div>
                </div>
                <Input addProject={(value) => this.onClickUpdateListProject(value)} />
                <ListProject listProject={this.state.listProject} />
            </div>
        )
    }
}