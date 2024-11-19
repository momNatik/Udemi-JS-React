import EmployeersListItem from '../employeers-list-item/employeers-list-item'

import './employeers-list.css'

const EmployeersList = ({ data, onDelete, onToggleProp }) => {
    const employeers = data.map(employeer => (<EmployeersListItem
        key={employeer.id}
        name={employeer.name}
        salary={employeer.salary}
        increase={employeer.increase}
        rise={employeer.rise}
        onDelete={() => onDelete(employeer.id)} 
        onToggleProp={(e) => onToggleProp(employeer.id, e.currentTarget.getAttribute('data-toggle'))}
        />))

    return (
        <ul className="app-list list-group">
            {employeers}
        </ul>
    )
}

export default EmployeersList;