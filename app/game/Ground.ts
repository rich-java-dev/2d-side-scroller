import Platform from './Platform'



class Ground extends Platform {

    public static pattern: any = null;


    public constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height, "green")
    }

    public draw = (ctx: any, offset: number) => {
        ctx.save()
        ctx.translate(-offset, 0)

        if (Ground.pattern == null) {
            let image = new Image(80, 80)
            image.src = 'images/grass.png'
            Ground.pattern = ctx.createPattern(image, "repeat");
        }

        ctx.fillStyle = Ground.pattern

        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.restore()
    }

}

export default Ground