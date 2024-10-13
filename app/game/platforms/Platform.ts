import GameObject from '../GameObject'
import Patterns from '../Patterns'

class Platform implements GameObject {


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



    public draw = (ctx: any, offset: number) => {
        ctx.save()
        ctx.translate(-offset, 0)

        ctx.fillStyle = Patterns.getBrickPattern(ctx)

        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.restore()
    }

}

export default Platform