import Platform from './Platform'
import Patterns from '../Patterns'


class Door extends Platform {

    public static pattern: any = null;

    public locked: boolean = true;

    public constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height, "black")
    }


    public draw = (ctx: any, offset: number) => {
        if (this.locked) {
            ctx.save()
            ctx.translate(-offset, 0)

            ctx.fillStyle = this.color//Patterns.getBrickPattern(ctx)

            ctx.fillRect(this.x, this.y, this.width, this.height)
            ctx.restore()
        }
    }

}

export default Door