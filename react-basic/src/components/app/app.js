
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';

import './app.css'

function App() {

const data = [
    { id: 1, name: "Vasya", salary: 800, increase: false},
    { id: 2, name: "Petya", salary: 1500, increase: true},
    { id: 3, name: "Kolya", salary: 3900, increase: false}
]

    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeersList data={data}/>
            <EmployeersAddForm />
        </div>
    );
}

export default App;