import Enemy from './Enemy'
import Platform from './Platform'
import GameObject from './GameObject'
import { detectEnemyPlatformCollision } from './CollisionDetection'
import { playerScreenPosition } from './Constants'

class Zombie extends Enemy {

    public zombiePattern: any = null
    public zombieDeadPattern: any = null

    public constructor(x: number, y: number, vx: number) {
        let direction = vx > 0 ? 1 : -1
        super(1, x, y, 60, 100, "", direction, vx)

        this.initialX = x;
        this.direction = direction
        this.vx = vx

    }

    // public behavior = () => { }

    public draw = (ctx: any, offset: number) => {
        ctx.save()
        ctx.translate(-offset + this.x, this.y)
        if (this.zombiePattern == null) {
            let image = new Image(60, 100)
            image.src = 'images/zombie.png'
            this.zombiePattern = ctx.createPattern(image, "no-repeat");
        }

        ctx.fillStyle = this.zombiePattern

        ctx.scale(-this.direction, 1)
        if (this.direction > 0)
            ctx.translate(-this.width, 0)

        ctx.fillRect(0, 0, this.width, this.height)
        ctx.restore()
    }


}

export default Zombie
