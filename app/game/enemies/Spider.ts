import Enemy from './Enemy'
import Platform from '../platforms/Platform'
import GameObject from '../GameObject'
import Key from '../items/Key'
import { detectEnemyPlatformCollision } from '../CollisionDetection'
import Translate from '../Translation'
import Patterns from '../Patterns'

class Spider extends Enemy {

    public constructor(x: number, y: number, vx: number, drop: Key | null) {
        let direction = vx > 0 ? 1 : -1
        super(2, x, y, 90, 52, "", direction, vx, drop)

        this.initialX = x;
        this.direction = direction
        this.vx = vx

    }

    public behavior = () => {

        if (this.hp > 0) {
            if (Math.abs(this.initialX - this.x) > 350) {
                this.vx = -this.vx
                this.direction = this.vx > 0 ? 1 : -1;
            }
            this.action += 0.1
            if (this.action >= 5) {
                this.vy = -15
                this.action = 0
            }
        }
    }

    public draw = (ctx: any, offsetX: number, offsetY: number) => {
        ctx.save()
        ctx.translate(Translate.x - offsetX + this.x, Translate.y - (offsetY < Translate.thresholdY ? offsetY : Translate.thresholdY) + this.y)
        if (this.hp <= 0) {
            ctx.fillStyle = Patterns.getDeadSpiderPattern(ctx)
            ctx.translate(0, 20)
            ctx.fillRect(0, 0, this.width, this.height)
            ctx.restore()
        }
        else {
            ctx.fillStyle = Patterns.getSpiderPattern(ctx)
            ctx.scale(-this.direction, 1)
            if (this.direction > 0)
                ctx.translate(-this.width, 0)
            ctx.fillRect(0, 0, this.width, this.height)
        }

        ctx.restore()
    }


}

export default Spider
