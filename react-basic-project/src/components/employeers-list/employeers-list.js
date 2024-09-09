import EmployeersListItem from '../employeers-list-item/employeers-list-item'

import './employeers-list.css'

const EmployeersList = ({ data, onDelete }) => {
    const employeers = data.map(employeer => (<EmployeersListItem
        key={employeer.id}
        name={employeer.name}
        salary={employeer.salary}
        increase={employeer.increase}
        onDelete={() => onDelete(employeer.id)} />))

    return (
        <ul className="app-list list-group">
            {employeers}
        </ul>
    )
}

export default EmployeersList;