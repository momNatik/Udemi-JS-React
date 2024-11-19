import { Component, Fragment } from 'react';

// Fragment - реакт фрагмент, позволяющий не использовать обертку div для компонентов (в верстке не виден)

class ClassChangeState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      jobTitle: ''
    };
  };

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
    }));
  }

  commitInputChanges = (e, message) => {
    console.log(message);
    this.setState({
      jobTitle: e.target.value
    });
  }

  render() {
    const { name, surname, link } = this.props;
    const { years, jobTitle } = this.state;
    return (
      <Fragment>
        <button onClick={this.nextYear}>+++</button>
        <h1>My name is {name},
          surname - {surname},
          age - {years}
          job title - {jobTitle}</h1>

        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'Click')} />
          {/*Прокидываем данные вместе с вызовом обработчика событий */}
        </form>
      </Fragment>
    )
  }
}


export default ClassChangeState;