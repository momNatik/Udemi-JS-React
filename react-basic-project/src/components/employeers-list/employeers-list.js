import EmployeersListItem from '../employeers-list-item/employeers-list-item'

import './employeers-list.css'

const EmployeersList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
    const employeers = data.map(employeer => (<EmployeersListItem
        key={employeer.id}
        name={employeer.name}
        salary={employeer.salary}
        increase={employeer.increase}
        rise={employeer.rise}
        onDelete={() => onDelete(employeer.id)} 
        onToggleIncrease={() => onToggleIncrease(employeer.id)}
        onToggleRise={() => onToggleRise(employeer.id)}
        />))

    return (
        <ul className="app-list list-group">
            {employeers}
        </ul>
    )
}

export default EmployeersList;