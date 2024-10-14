import Platform from './Platform'
import Patterns from '../Patterns'
import Translate from '../Translation'


class Ground extends Platform {

    public static pattern: any = null;


    public constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height, "green")
    }

    public draw = (ctx: any, offsetX: number, offsetY: number) => {
        ctx.save()
        ctx.translate(Translate.x - offsetX, Translate.y - (offsetY < Translate.thresholdY ? offsetY : Translate.thresholdY))

        ctx.fillStyle = Patterns.getGroundPattern(ctx)

        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.restore()
    }

}

export default Ground