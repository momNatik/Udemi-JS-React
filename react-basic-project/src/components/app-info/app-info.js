import './app-info.css'

const AppInfo = ( {employeersCount, increasedCount} ) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {employeersCount}</h2>
            <h2>Премию получат: {increasedCount}</h2>
        </div>
    )
}

export default AppInfo;