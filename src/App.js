import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const particlesOptions = {
    particles: {
        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 800
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 800,
                "line_linked": {
                    "opacity": 1
                }
            },
        }
    },
};


class App extends Component {
    render() {
        return (
            <div className="App">
                <Particles className='particles' params={particlesOptions} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm />
                {/*<FaceRecognition />*/}
            </div>
        );
    }
}

export default App;
