import Enemy from './Enemy'
import Platform from '../platforms/Platform'
import GameObject from '../GameObject'
import Key from '../items/Key'
import { detectEnemyPlatformCollision } from '../CollisionDetection'
import Translate from '../Translation'
import Patterns from '../Patterns'

class Eyeball extends Enemy {

    public resurrection = 0
    public lives = 2
    public currLife = 1

    public constructor(x: number, y: number, vx: number, drop: Key | null) {
        let direction = vx > 0 ? 1 : -1
        super(3, x, y, 400, 380, "", direction, vx, drop)

        this.initialX = x;
        this.direction = direction
        this.vx = vx

    }

    public behavior = () => {

        if (this.hp > 0) {
            if (Math.abs(this.initialX - this.x) > 700) {
                this.vx = -this.vx
                this.direction = this.vx > 0 ? 1 : -1;
            }
        }

        if (this.hp == 0) {

            if (this.currLife <= this.lives) {
                this.resurrection += 0.1
                if (this.resurrection > 15) {
                    if (this.currLife == this.lives) this.drops.push(new Key())
                    this.currLife++
                    this.resurrection = 0
                    this.hp = 3
                    this.vx = this.direction * 5
                }
            }
        }
        else {
            this.action += 0.1
            if (this.action >= 10) {
                this.vy = -20
                this.action = 0
            }
        }
    }

    public draw = (ctx: any, offsetX: number, offsetY: number) => {
        ctx.save()
        ctx.translate(Translate.x - offsetX + this.x, Translate.y - (offsetY < Translate.thresholdY ? offsetY : Translate.thresholdY) + this.y)
        if (this.hp <= 0) {
            ctx.fillStyle = Patterns.getDeadEyeballPattern(ctx)
            // ctx.translate(0, 70)
            ctx.fillRect(0, 0, this.width + 300, this.height + 50)
            ctx.restore()
        }
        else {
            ctx.fillStyle = Patterns.getEyeballPattern(ctx)
            ctx.scale(-this.direction, 1)
            if (this.direction > 0)
                ctx.translate(-this.width, 0)
            ctx.fillRect(0, 0, this.width, this.height)
        }

        ctx.restore()
    }


}

export default Eyeball
