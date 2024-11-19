import "./employeers-list-item.css"

const EmployeersListItem = (props) => {

    const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise } = props;

    let employeer = "list-group-item d-flex justify-content-between"

    if (increase) {
        employeer += ' increase';
    }

    if (rise) {
        employeer += ' like';
    }

    return (
        <li className={employeer}>
            <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div>
                <button
                    type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}


export default EmployeersListItem;