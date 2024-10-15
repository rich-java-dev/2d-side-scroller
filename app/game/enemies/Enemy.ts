import Platform from '../platforms/Platform'
import GameObject from '../GameObject'
import Item from '../items/Item'
import { detectEnemyPlatformCollision } from '../CollisionDetection'
import Translate from '../Translation'
import Sounds from '../Sounds'

class Enemy implements GameObject {


    public x: number = 25
    public y: number = 0
    public width: number = 10
    public height: number = 10
    public color: string = "red"
    public hp: number = 1

    public vx: number = 2
    public vy: number = 0
    public action: number = 0
    public direction: number = 1

    public initialX: number = 0;

    public drops: Item[] = [];

    public constructor(hp: number, x: number, y: number, width: number, height: number, color: string, direction: number, vx: number, item: Item | null) {
        this.hp = hp
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.direction = direction
        this.vx = vx

        if (item != null)
            this.drops.push(item)

        this.initialX = x;

    }


    public draw = (ctx: any, offsetX: number, offsetY: number) => {
        ctx.save()
        ctx.translate(Translate.x - offsetX + this.x, Translate.y - (offsetY < Translate.thresholdY ? offsetY : Translate.thresholdY) + this.y)

        // ctx.rotate(this.direction*Math.PI/2);
        ctx.font = "30px Arial";
        ctx.fillStyle = this.color
        ctx.fillText("ლ(ಠ益ಠ)ლ", this.x, this.y)
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.restore()
    }


    public update = () => {

        this.vy += 1;
        if (this.vy > 15)
            this.vy = 15;

        this.behavior()

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

    }

    public behavior() {
        if (this.hp > 0) {
            if (Math.abs(this.initialX - this.x) > 200) {
                this.vx = -this.vx
                this.direction = this.vx > 0 ? 1 : -1;
            }
        }
    }

    public dropItems(): Item[] {
        let drops = this.drops.map(drop => {
            drop.x = this.x + this.width / 2
            drop.y = this.y + this.height / 2
            return drop
        })

        this.drops = []

        return drops

    }

    public takeDamage = () => {
        if (this.hp > 0) {
            Sounds.hitSound()
            this.hp--
        }
        if (this.hp <= 0) {
            this.vx = 0
        }
    }

    public translate() {

    }


}

export default Enemy