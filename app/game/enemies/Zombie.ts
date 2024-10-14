import Enemy from './Enemy'
import Platform from '../platforms/Platform'
import GameObject from '../GameObject'
import { detectEnemyPlatformCollision } from '../CollisionDetection'
import Translate from '../Translation'
import Patterns from '../Patterns'

class Zombie extends Enemy {

    public resurrection = 0

    public constructor(x: number, y: number, vx: number) {
        let direction = vx > 0 ? 1 : -1
        super(1, x, y, 60, 100, "", direction, vx, null)

        this.initialX = x;
        this.direction = direction
        this.vx = vx

    }

    public behavior = () => {
        super.behavior()
        if (this.hp == 0) {
            this.resurrection += 0.1
            if (this.resurrection > 13) {
                this.resurrection = 0
                this.hp = 1
                this.vx = this.direction
            }
        }
    }

    public draw = (ctx: any, offsetX: number, offsetY: number) => {
        ctx.save()
        ctx.translate(Translate.x - offsetX + this.x,  Translate.y - (offsetY < Translate.thresholdY ? offsetY : Translate.thresholdY) + this.y)

        if (this.hp <= 0) {
            ctx.fillStyle = Patterns.getDeadZombiePattern(ctx)
            ctx.translate(0, 70)
            ctx.fillRect(0, 0, this.height, this.width)
            ctx.restore()
        }
        else {
            ctx.fillStyle = Patterns.getZombiePattern(ctx)
            ctx.scale(-this.direction, 1)
            if (this.direction > 0)
                ctx.translate(-this.width, 0)
            ctx.fillRect(0, 0, this.width, this.height)
        }

        ctx.restore()
    }


}

export default Zombie
