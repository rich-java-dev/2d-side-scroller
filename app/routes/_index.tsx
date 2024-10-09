import React, { useRef, useEffect } from 'react'
import Player from '../game/Player';
import Platform from '../game/Platform'

const Canvas = props => {

    const canvasRef = useRef(null)

    const width = 1500
    const height = 900
    const groundHeight = 700

    const levelPlatforms: Platform[] = []
    const player: Player = new Player()


    const draw = (ctx: any, frameCount: number) => {
        update()
        drawToCanvas(ctx)
    }


    const update = () => {
        player.update(levelPlatforms)
    }

    const drawToCanvas = (ctx: any) => {
        ctx.clearRect(-player.x, 0, width, height);
        drawLevel(ctx)
        player.draw(ctx)
    }

    const drawLevel = (ctx: any) => {

        ctx.rect(0, 0, width, height);
        ctx.fillStyle = "cyan";
        ctx.fill();
        levelPlatforms.map(o => o.draw(ctx, player.x))

    }


    useEffect(() => {

        levelPlatforms.push(new Platform(0, groundHeight + 70, 2000, height, "green"))
        levelPlatforms.push(new Platform(200, groundHeight + 30, 800, 50, "brown"))
        levelPlatforms.push(new Platform(300, groundHeight - 10, 600, 50, "brown"))
        levelPlatforms.push(new Platform(400, groundHeight - 50, 400, 50, "brown"))
        levelPlatforms.push(new Platform(500, groundHeight - 90, 200, 50, "brown"))

        levelPlatforms.push(new Platform(2100, groundHeight, 1000, height, "green"))
        levelPlatforms.push(new Platform(2200, groundHeight - 40, 800, 50, "brown"))
        levelPlatforms.push(new Platform(2300, groundHeight - 90, 600, 50, "brown"))
        levelPlatforms.push(new Platform(2400, groundHeight - 130, 400, 50, "brown"))
        levelPlatforms.push(new Platform(2500, groundHeight - 160, 200, 50, "brown"))

        levelPlatforms.push(new Platform(3200, groundHeight - 40, 200, 50, "gray"))
        levelPlatforms.push(new Platform(3500, groundHeight - 40, 200, 50, "gray"))
        levelPlatforms.push(new Platform(3800, groundHeight - 40, 300, 50, "gray"))

        levelPlatforms.push(new Platform(4300, groundHeight, 2000, height, "green"))

        levelPlatforms.push(new Platform(5000, groundHeight - 300, 200, 20, "yellow"))
        levelPlatforms.push(new Platform(5000, groundHeight - 300, 20, 300, "yellow"))
        levelPlatforms.push(new Platform(5200, groundHeight - 300, 20, 300, "yellow"))


        const canvas: any = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId: any

        //Our draw came here
        const render = () => {
            frameCount++
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return (<canvas width={width} height={height} ref={canvasRef} tabIndex={0} onKeyDown={player.controller} onKeyUp={player.controller} />);
}

export default Canvas