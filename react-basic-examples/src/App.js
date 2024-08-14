import { Component } from 'react';
import './App.css';


class WnoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27
    }
  }

  // nextYear = () => {
  //   this.setState({
  //     years: this.state.years + 1
  //   })
  // }
  // setState() - асинхронная операция. Последовательность может быть нарушена из-за процессов оптимизации реакт. И текущее состояние не успеет принять новое значение (обновиться) из-за выполнения других процессов.

  // Если принципиальна точность и последовательность данных (например счетчик), следует передавать callback функцию

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>+++</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <WnoAmI name='Jonh' surname='Smith' link='facebook.com' />
      <WnoAmI name='Alex' surname='Shepard' link='vk.com' />
    </div>
  );
}

export default App;
