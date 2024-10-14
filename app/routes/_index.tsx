import React, { useRef, useEffect } from 'react'
import Enemy from '../game/enemies/Enemy'
import Player from '../game/Player';
import Platform from '../game/platforms/Platform'
import Goal from '../game/Goal'
import LevelManager from '../game/levels/LevelManager'
import Translate from '../game/Translation'

const Canvas = () => {

    const canvasRef = useRef(null)

    let width = window.innerWidth
    let height = window.innerHeight

    const levelManager: LevelManager = new LevelManager()


    const resizeCanvas = (canvas: any, newWidth: number, newHeight: number) => {
        canvas.width = newWidth;
        canvas.height = newHeight;
        width = newWidth;
        height = newHeight;
        Translate.x = width / 2
        Translate.y = height / 2
    };

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
            const width = window.innerWidth - 15;
            const height = window.innerHeight - 15;
            resizeCanvas(canvas, width, height)
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