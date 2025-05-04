import GameObject from '../GameObject'
import Patterns from '../Patterns'
import Translate from '../Translation'

class MovingPlatform implements GameObject {


    public x: number = 0;
    public y: number = 0;
    public width: number = 10;
    public height: number = 10;
    public color: string = "green";

    public constructor(x: number, y: number, width: number, height: number, color: string) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }



    public draw = (ctx: any, offsetX: number, offsetY: number) => {
        ctx.save()
        ctx.translate(Translate.x - offsetX, Translate.y - (offsetY < Translate.thresholdY ? offsetY : Translate.thresholdY))

        ctx.fillStyle = Patterns.getBrickPattern(ctx)

        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.restore()
    }

}

export default MovingPlatform