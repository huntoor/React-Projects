import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import './App.css';

import Heading from './Components/Week1/Heading';
import Card from './Components/Week1/Card';

import HandleClick from './Components/Week2/handleClick';
import InputComponent from './Components/Week2/InputComponent'
import Fruites from './Components/Week2/Fruites';
import FruitesCounter from './Components/Week2/FruitesCounter';

import HomePage from './Components/Week3/HomePage';
import AboutMe from './Components/Week3/AboutMe';

import lemonLogo from './assets/littleLemonLogo.png';

import MyVideo from './Components/Week3/MyVideo';
import MyAudio from './Components/Week3/MyAudio';

function App() {
  const [ fruites ] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'orange', id: 2},
    {fruitName: 'plum', id: 3},
  ]);

  return (
    <div className='App'>
        This is the straing code for "Your first Component" Upgraded lab
        <Heading firstName="Salma <3"/>
        <div>
          <Card h2="First card's h2" h3="Frist card's h3" />
          <Card h2="Second card's h2" h3="Second card's h3" />
          <button onClick={HandleClick}>
            Giess the number between 1 and 3
          </button>
          <InputComponent />
          <Fruites fruites={fruites} />
          <FruitesCounter fruites={fruites} />
        </div>

        <div className='Nav'>
          <nav className='nav'>
            <Link to="/" className='nav-item'>HomePage</Link>
            <Link to="/about-me" className='nav-item'>About Me</Link>
          </nav>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-me' element={<AboutMe />} />
          </Routes>
        </div>

        <div className='image'>
          <img src={lemonLogo} height="100px" />
          <img src={require('./assets/littleLemonLogo.png')} height="100px" />
        </div>

        <div className='video'>
          <MyVideo />
          <MyAudio />
        </div>
    </div>
  );
}

export default App;
