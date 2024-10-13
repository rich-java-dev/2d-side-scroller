import Item from './Item'
import Patterns from '../Patterns'

class Key extends Item {


    public constructor() {
        super()
        this.width = 30
        this.height = 50
    }

    public draw = (ctx: any, offset: number) => {
        ctx.save()
        ctx.translate(-offset + this.x, this.y)

        // ctx.rotate(this.direction*Math.PI/2);
        ctx.font = "30px Arial";
        ctx.fillStyle = Patterns.getKeyPattern(ctx)

        ctx.fillRect(0, 0, this.width, this.height)
        ctx.restore()
    }


}

export default Key