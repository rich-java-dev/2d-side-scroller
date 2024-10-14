import Enemy from './Enemy'
import Platform from '../platforms/Platform'
import GameObject from '../GameObject'
import Key from '../items/Key'
import { detectEnemyPlatformCollision } from '../CollisionDetection'
import Translate from '../Translation'
import Patterns from '../Patterns'

class Skeleton extends Enemy {

    public resurrection = 0

    public constructor(x: number, y: number, vx: number, drop: Key | null) {
        let direction = vx > 0 ? 1 : -1
        super(1, x, y, 60, 100, "", direction, vx, drop)

        this.initialX = x;
        this.direction = direction
        this.vx = vx

    }


    public update = () => {

        this.behavior()

        if (this.hp <= 0) {
            this.vy += 1;
            if (this.vy > 15)
                this.vy = 15;
        }

        this.x = this.x + this.vx;
        this.y = this.y + this.vy + this.direction * 5 * Math.sin(this.x * Math.PI / 100);

    }


    public behavior = () => {
        super.behavior()
    }

    public draw = (ctx: any, offsetX: number, offsetY: number) => {
        ctx.save()
        ctx.translate(Translate.x-offsetX + this.x, Translate.y - (offsetY < Translate.thresholdY ? offsetY : Translate.thresholdY) + this.y)

        if (this.hp <= 0) {
            ctx.fillStyle = Patterns.getDeadBatPattern(ctx)
            ctx.translate(0, 70)
            ctx.fillRect(0, 0, this.height, this.width)
            ctx.restore()
        }
        else {
            ctx.fillStyle = Patterns.getBatPattern(ctx)
            ctx.scale(-this.direction, 1)
            if (this.direction > 0)
                ctx.translate(-this.width, 0)
            ctx.fillRect(0, 0, this.width, this.height)
        }

        ctx.restore()
    }


}

export default Skeleton
