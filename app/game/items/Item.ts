import GameObject from '../GameObject'

class Item implements GameObject {

    public x: number = 0
    public y: number = 0
    public width: number = 0
    public height: number = 0
    public color: string = "yellow"

    public constructor() {
    }


    public draw = (ctx: any, offset: number) => {
        ctx.save()
        ctx.translate(-offset, 0)

        // ctx.rotate(this.direction*Math.PI/2);
        ctx.font = "30px Arial";
        ctx.fillStyle = this.color
        ctx.fillText("$", this.x, this.y)
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.restore()
    }

}

export default Item