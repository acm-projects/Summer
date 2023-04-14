import styles from './styles/HeroGradient.module.css'

import { Gradient } from '../Gradient.js'
import { useEffect } from 'react'

const HeroGradient = () => {
    // useEffect(() => {
    // const gradientCanvas = document.getElementById('gradient-canvas');
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas')
    // }, []);

    return (
        <div>
            <canvas id="gradient-canvas" data-transition-in />
        </div>
    )
}

export default HeroGradient