import React from 'react';
import './counter.css'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValue: this.props.initialValue
        }
    }


    increase = () => {
        if (this.state.initialValue < this.props.maxValueOfCounter) {
            this.setState(state => ({
                initialValue: state.initialValue + 1
            }))

        }
    }

    decrease = () => {
        if (this.state.initialValue > this.props.minValueOfCounter) {
            this.setState(state => ({
                initialValue: state.initialValue - 1
            }))
        }
    }

    random = () => {
        const { maxValueOfCounter: max, minValueOfCounter: min } = this.props;
        this.setState({
            initialValue: Math.floor(Math.random() * (max - min) + min)
     })
    }

    reset = () => {
        this.setState({
                initialValue: this.props.initialValue
         })
    }

    render() {
        return (
            <div className="counter">
                <div className="counter-num">{this.state.initialValue}</div>
                <div className="controls">
                    <button onClick={this.increase}>INC</button>
                    <button onClick={this.decrease}>DEC</button>
                    <button onClick={this.random}>RND</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        )
    }
}

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

export default Counter;