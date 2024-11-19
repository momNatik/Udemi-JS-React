import './app-filter.css'

const AppFilter = ({filterRise, filterSalary}) => {
    return (
        <div className="btn-group">
            <button 
            className="btn btn-light"
            type="button">
                Все сотрудники
            </button>

            <button 
            className="btn btn-outline-light"
            type="button"
            onClick={filterRise}>
                На повышение
            </button>

            <button 
            className="btn btn-outline-light"
            type="button"
            onClick={filterSalary}>
                З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;