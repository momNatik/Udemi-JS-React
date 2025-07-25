import Counter from './components/counter/counter'
import ClassChangeState from './components/class-change-state/class-change-state'
import './App.css';


function App() {
  return (
    <div className="App">
      <ClassChangeState name='Jonh' surname='Smith' link='facebook.com' />
      <ClassChangeState name='Alex' surname='Shepard' link='vk.com' />

      <div className="counter-container">
        <Counter initialValue={0} maxValueOfCounter={50} minValueOfCounter={-50}/>
      </div>
    </div>
  );
}

export default App;
