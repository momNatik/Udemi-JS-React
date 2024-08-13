import EmployeersListItem from '../employeers-list-item/employeers-list-item'

import './employeers-list.css'

const EmployeersList = () => {
    const employeers = [
        { id: 1, name: "Vasya", salary: 800 },
        { id: 2, name: "Petya", salary: 1500 },
        { id: 3, name: "Kolya", salary: 3900 }
    ];
    return (
        <ul className="app-list list-group">
            {employeers.map(employeer => (<EmployeersListItem id={employeer.id} name={employeer.name} salary={employeer.salary} />))}
        </ul>
    )
}

export default EmployeersList;