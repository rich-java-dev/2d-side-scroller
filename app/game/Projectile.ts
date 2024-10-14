import GameObject from './GameObject'
import Translate from './Translation'

class Projectile implements GameObject {

    public x: number = 0
    public y: number = 0

    public width: number = 50
    public height: number = 5
    public color: string = "black"

    public vx: number = 0
    public vy: number = 0

    public duration: number = 5
    public time: number = 0

    public constructor(x: number, y: number, vx: number) {
        this.x = x
        this.y = y
        this.vx = vx
    }

    public update = () => {
        this.time += 0.1
        this.vy += .5;
        if (this.vy > 15)
            this.vy = 15;

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }

    public draw = (ctx: any, offsetX: number, offsetY: number) => {
        ctx.save()
        ctx.translate(Translate.x - offsetX + this.x, Translate.y - (offsetY < Translate.thresholdY ? offsetY : Translate.thresholdY) + this.y +30)
        ctx.fillRect(0, 0, this.width, this.height)

        ctx.restore()
    }

}

export default Projectile