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
    public hp: number = 1

    public vx: number = 2
    public vy: number = 0
    public action: number = 0
    public direction: number = 1

    public initialX: number = 0;

    public constructor(hp: number, x: number, y: number, width: number, height: number, color: string, direction: number, vx: number) {
        this.hp = hp
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.direction = direction
        this.vx = vx

        this.initialX = x;

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

    public takeDamage = () => {
        if (this.hp > 0) {
            this.hitSound()
            this.hp--
        }
        if (this.hp <= 0)
            this.vx = 0
    }


    public hitSound = () => {
        let audio = new Audio('sounds/hit.wav');
        audio.play();
    }

}

export default Enemy