import React, { useRef, useEffect } from 'react'
import Enemy from '../game/enemies/Enemy'
import Player from '../game/Player';
import Platform from '../game/platforms/Platform'
import Goal from '../game/Goal'
import LevelManager from '../game/levels/LevelManager'

const Canvas = props => {

    const canvasRef = useRef(null)

    const width = 1500
    const height = 900

    const levelManager: LevelManager = new LevelManager()

    useEffect(() => {

        const canvas: any = canvasRef.current
        const context = canvas.getContext('2d')
        let animationFrameId: any

        levelManager.ctx = context
        levelManager.width = width
        levelManager.height = height
        levelManager.activateNextLevel()

        //Our draw came here
        const render = () => {
            levelManager.step()
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [levelManager.step])

    return (<canvas width={width} height={height} ref={canvasRef} tabIndex={0} onKeyDown={levelManager.controller} onKeyUp={levelManager.controller} />);
}

export default Canvas