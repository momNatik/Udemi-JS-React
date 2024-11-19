import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: "Vasya", salary: 800, increase: false, rise: true },
                { id: 2, name: "Petya", salary: 1500, increase: true, rise: false },
                { id: 3, name: "Kolya", salary: 3900, increase: false, rise: false }
            ],
            term: ''

        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }

        })
    }

    addItem = (name, salary) => {
        if (name.length >= 3 && salary > 0) {
            const newItem = {
                name,
                salary,
                increase: false,
                rise: false,
                id: this.maxId++
            }
            this.setState(({ data }) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        }

    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterRise = () => {

    }

    filterSalary = () => {

    }

    render() {
        const {data, term} = this.state;
        const employeersCount = this.state.data.length;
        const increasedCount = this.state.data.filter((item) => item.increase === true).length;
        const visibleData = this.searchEmp(data, term);
        return (
            <div className="app">
                <AppInfo
                    employeersCount={employeersCount}
                    increasedCount={increasedCount} />
                <div className="search-panel">
                    <SearchPanel 
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                    filterRise={this.filterRise}
                    filterSalary={this.filterSalary}/>
                </div>

                <EmployeersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeersAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;