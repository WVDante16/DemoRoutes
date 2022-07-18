import React, { Component } from 'react';
import './Pomodoro.css';

class Pomodoro extends Component {
    constructor() {
        super();

        //Initial State
        this.state = {
            alert: {
                type: '',
                message: '',
            }, 

            time: 0,
            pause: false,
            running: false
        };

        this.times = {
            defaultTime: 1800, //30 min
            mediumTime: 900, //15 min
            shortTime: 300, //5 min
        }
    }

    componentDidMount() {
        //Establece tiempo por defecto cuando el componente sea montado
        this.setDefaultTime()
    }

    setDefaultTime() {
        this.setState({
            time: this.times.defaultTime
        })
    }

    //Buttons

    //Señora paja
    setLargeTime = () => {
        this.setState({
            alert: {
                type: 'large',
                message: 'A TRABAJAR! Esa cum no sale sola UwUr',
                running: true
            },
            running: true
        })

        this.setTime(this.times.defaultTime);
    }

    //Paja normal
    setMediumTime = () => {
        this.setState({
            alert: {
                type: 'medium',
                message: 'Una paja y a dormir UwU',
            },
            running: true
        })

        this.setTime(this.times.mediumTime);
    }

    //Un rapidin
    setShortTime = () => {
        this.setState({
            alert: {
                type: 'short',
                message: 'Un hechizo simple, pero inquebrantable OwO',
            },
            running: true
        })

        this.setTime(this.times.shortTime);
    }

    setTime = (newTime) => {
        this.restartInterval();
        this.setState({
            time: newTime,
        })
    }

    restartInterval = () => {
        clearInterval(this.interval);

        this.interval = setInterval(this.countDown, 1000);
    }

    //Contador
    countDown = () => {
        if (this.state.time === 0) {
            this.setState({
                alert: {
                    type: 'end',
                    message: 'SE ACABO! A La Horny Jail!',
                }
            })
        }
        else if (this.state.pause === false) {
            this.setState({
                time: this.state.time - 1,
            })
        }
    }

    handlePause = () => {
        if (this.state.pause === false) {
            this.setState({
                pause: true
            })
        }
        else {
            this.setState({
                pause: false
            })
        }
    }

    handleReload = () => {
        this.setState({
            running: false
        })
        window.location.reload()
    }

    displayTimer(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        
        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    render() {
        const {alert: {message, type}, time} = this.state;

        return (
            <div className = "Pomodoro">
                <div className = "timer">
                    {this.displayTimer(time)}
                </div>

                <div className = "types">
                    <button
                        className = "large"
                        onClick = {this.setLargeTime}
                    >
                        Señora Paja
                    </button>

                    <button
                        className = "medium"
                        onClick = {this.setMediumTime}
                    >
                        Vladimir
                    </button>

                    <button
                        className = "short"
                        onClick = {this.setShortTime}
                    >
                        Un Rapidin
                    </button>
                </div>

                <span>
                    {this.state.running ? (
                        <div>
                            <button
                                className = "pause"
                                onClick = {this.handlePause}
                            >
                            <i className = {this.state.pause ? 'fa fa-play' : 'fa fa-pause'} ></i>   
                            </button>
                            <button
                                className = "restart"
                                onClick = {this.handleReload}
                            >
                                <i class="fa fa-square" aria-hidden="true"></i>
                            </button>
                        </div>
                    ) : ''}
                </span>

                <div className = {`alert ${type}`}>
                    {message}
                </div>
            </div>
        )
    }
}

export default Pomodoro;