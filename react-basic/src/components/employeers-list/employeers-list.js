import EmployeersListItem from '../employeers-list-item/employeers-list-item'

import './employeers-list.css'

const EmployeersList = ({data}) => {
    const employeers = data.map(employeer => (<EmployeersListItem id={employeer.id} name={employeer.name} salary={employeer.salary} increase={employeer.increase} />))

    return (
        <ul className="app-list list-group">
           {employeers}
        </ul>
    )
}

export default EmployeersList;