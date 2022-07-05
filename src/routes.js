import React from 'react';
import {Route, Routes} from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home/Home';
import Calculadora from './Components/Calculadora/Calculadora';
import Pomodoro from './Components/Pomodoro/Pomodoro';

const  AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Calculadora' element={<Calculadora />} />
            <Route path='/Pomodoro' element={<Pomodoro />} />
        </Routes>
    </App>
)

export default AppRoutes;