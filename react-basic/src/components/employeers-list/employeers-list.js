import EmployeersListItem from '../employeers-list-item/employeers-list-item'

import './employeers-list.css'

const EmployeersList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeersListItem />
            <EmployeersListItem />
            <EmployeersListItem />
        </ul>
    )
}

export default EmployeersList;