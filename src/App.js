import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

const waitTime = 5000

function App() {
    const [idle, setIdle] = useState(false)
    const [timerHandle, setTimerHandle] = useState()

    useEffect(() => {
        const firstTimeout = setTimeout(timer, waitTime)
        console.log('firstTimeout', firstTimeout)
        setTimerHandle(firstTimeout)
        window.addEventListener(`click`, handleMouseMove)
    }, [])

    const timer = () => {
        console.log('user is idle')
        setIdle(true)
    }

    const handleMouseMove = () => {
        console.log('mouse move so clearing timer')

        setTimerHandle((curr) => {
            console.log('curr', curr)
            clearInterval(curr)
            const newTimeout = setTimeout(timer, waitTime)
            console.log('new timeout', newTimeout)
            return newTimeout
        })

        setIdle(false)
    }

    // stops interacting
    // setIdle(true)
    // print message

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
