import Platform from './Platform'
import Patterns from '../Patterns'
import Translate from '../Translation'


class TrapDoor extends Platform {

    public static pattern: any = null;

    public locked: boolean = true;

    public constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height, "black")
    }


    public draw = (ctx: any, offsetX: number, offsetY:number) => {
        if (this.locked) {
            ctx.save()
            ctx.translate(Translate.x-offsetX, Translate.y - (offsetY < Translate.thresholdY ? offsetY : Translate.thresholdY))


            ctx.fillStyle = this.color//Patterns.getBrickPattern(ctx)

            ctx.fillRect(this.x, this.y, this.width, this.height)
            ctx.restore()
        }
    }

}

export default TrapDoor