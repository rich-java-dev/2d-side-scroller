import Platform from './Platform'
import Patterns from '../Patterns'


class Wall extends Platform {

    public static pattern: any = null;


    public constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height, "green")
    }

    public draw = (ctx: any, offset: number) => {
        ctx.save()
        ctx.translate(-offset, 0)

        ctx.fillStyle = Patterns.getBrickPattern(ctx)

        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.restore()
    }

}

export default Wall