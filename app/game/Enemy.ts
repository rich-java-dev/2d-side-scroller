import Platform from './Platform'
import GameObject from './GameObject'
import { detectEnemyPlatformCollision } from './CollisionDetection'
import { playerScreenPosition } from './Constants'

class Enemy implements GameObject {


    public x: number = 25
    public y: number = 0
    public width: number = 10
    public height: number = 10
    public color: string = "red"

    private vx: number = 2
    private vy: number = 0
    private action: number = 0
    private direction: number = 1

    private initialX: number = 0;

    public constructor(x: number, y: number, width: number, height: number, color: string, direction: number, vx: number) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.initialX = x;

        this.direction = direction
        this.vx = vx

    }


    public draw = (ctx: any, offset: number) => {
        ctx.save()
        ctx.translate(-offset, 0)

        // ctx.rotate(this.direction*Math.PI/2);
        ctx.font = "30px Arial";
        ctx.fillStyle = this.color
        ctx.fillText("ლ(ಠ益ಠ)ლ", this.x, this.y)
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.restore()
    }


    public update = (platforms: Platform[]) => {

        this.vy += 1;
        if (this.vy > 15)
            this.vy = 15;

        platforms.map(p => {
            if (detectEnemyPlatformCollision(this, p)) {
                this.y = p.y - this.height
                if (this.vy > 0) this.vy = 0
            }
        })


        this.behavior()

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

    }

    public behavior = () => {

        if (Math.abs(this.initialX - this.x) > 200) {
            this.vx = -this.vx
            this.direction = this.vx > 0 ? 1 : -1;
        }



    }

}

export default Enemy