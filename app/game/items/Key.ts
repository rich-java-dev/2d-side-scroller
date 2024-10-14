import Item from './Item'
import Patterns from '../Patterns'
import Translate from '../Translation'

class Key extends Item {


    public constructor() {
        super()
        this.width = 30
        this.height = 50
    }

    public draw = (ctx: any, offsetX: number, offsetY: number) => {
        ctx.save()
        ctx.translate(Translate.x - offsetX + this.x, Translate.y - (offsetY < Translate.thresholdY ? offsetY : Translate.thresholdY) + this.y)

        // ctx.rotate(this.direction*Math.PI/2);
        ctx.font = "30px Arial";
        ctx.fillStyle = Patterns.getKeyPattern(ctx)

        ctx.fillRect(0, 0, this.width, this.height)
        ctx.restore()
    }


}

export default Key