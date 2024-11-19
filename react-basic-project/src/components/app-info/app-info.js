import './app-info.css'

const AppInfo = (props) => {
    const { maxId, data } = props;
    const increaseCount = data.filter((item) => item.increase === true).length;
    const employeersCount = maxId - 1;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {employeersCount}</h2>
            <h2>Премию получат: {increaseCount}</h2>
        </div>
    )
}

export default AppInfo;