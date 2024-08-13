import EmployeersListItem from '../employeers-list-item/employeers-list-item'

import './employeers-list.css'

const EmployeersList = () => {
    const employeers = [
        { id: 1, name: "Vasya" },
        { id: 2, name: "Petya" },
        { id: 3, name: "Kolya" }
    ];
    return (
        <ul className="app-list list-group">
            {employeers.map(employeer => (<EmployeersListItem id={employeer.id} name={employeer.name} />))}
        </ul>
    )
}

export default EmployeersList;