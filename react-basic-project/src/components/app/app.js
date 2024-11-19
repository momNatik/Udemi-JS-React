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
            ]

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

    onToggleIncrease = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, increase: !item.increase }
                }
                return item;
            })
        }))
        // способ 2 - работа с массивом через map
    }

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`)
    }

    render() {
        const employeersCount = this.state.data.length;
        const increasedCount = this.state.data.filter((item) => item.increase === true).length;
        return (
            <div className="app">
                <AppInfo
                    employeersCount={employeersCount}
                    increasedCount={increasedCount} />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeersList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />
                <EmployeersAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;