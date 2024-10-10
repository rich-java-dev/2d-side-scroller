import Platform from './Platform'
import GameObject from './GameObject'
import { detectPlayerPlatformCollision } from './CollisionDetection'
import { playerScreenPosition } from './Constants'

class Player implements GameObject {


    public x: number = 0;
    public y: number = 0
    public width: number = 10
    public height: number = 100
    public color: string = "black"

    private vx: number = 0
    private vy: number = 0
    private action: number = 0
    private direction: number = 1

    private hp: number = 3

    public constructor() {
    }


    public draw = (ctx: any) => {
        ctx.save();
        ctx.translate(this.x, 0)
        ctx.lineWidth = 8;
        //head
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(playerScreenPosition - this.x, this.y, 25, 0, Math.PI * 2, true); // draw circle for head
        ctx.fill()

        // body
        ctx.beginPath();

        ctx.fillRect(playerScreenPosition - this.x - 5, this.y, 10, 50)

        // legs
        ctx.beginPath();
        ctx.moveTo(playerScreenPosition - this.x, this.y + 50);
        ctx.lineTo(playerScreenPosition - this.x + 5 + (Math.ceil(Math.abs(this.x)) % 40) / 4, this.y + 100);
        ctx.moveTo(playerScreenPosition - this.x, this.y + 50);
        ctx.lineTo(playerScreenPosition - this.x - 5 - (Math.ceil(Math.abs(this.x)) % 40) / 4, this.y + 100);
        ctx.stroke();


        // arms
        ctx.beginPath();
        ctx.moveTo(playerScreenPosition - this.x, this.y + 10);
        ctx.lineTo(playerScreenPosition - this.x + 10 + 5 * Math.sin(this.action / 2) + (Math.ceil(Math.abs(this.x)) % 35) / 10, this.y + 60 + 5 * Math.sin(this.action / 2));
        ctx.moveTo(playerScreenPosition - this.x, this.y + 10);
        ctx.lineTo(playerScreenPosition - this.x - 10 - 5 * Math.sin(this.action / 2) - (Math.ceil(Math.abs(this.x)) % 35) / 10, this.y + 60 + 5 * Math.sin(this.action / 2));
        ctx.stroke();

        //staff
        ctx.beginPath();
        ctx.fillStyle = "silver";
        let rotateAngle = -2

        ctx.translate(playerScreenPosition - this.x + this.direction * 15, this.y + 60)
        ctx.rotate(this.direction * rotateAngle - this.direction * Math.cos(this.action))
        ctx.fillRect(0, 0, 8, 85)

        ctx.stroke();
        ctx.restore();
    }


    public update = (platforms: Platform[]) => {

        this.vy += 1;
        if (this.vy > 18)
            this.vy = 18;

        platforms.map(p => {
            if (detectPlayerPlatformCollision(this, p)) {
                this.y = p.y - this.height
                if (this.vy > 0) this.vy = 0
            }
        })

        if (this.action > 0) {
            this.action += 0.3;
        }
        if (this.action >= 6.28)
            this.action = 0;


        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if (this.y > 2000) {
            this.y = 100
            this.vy = 0
            this.x = 0
        }
    }


    public controller = (evt: any) => {

        switch (evt.type) {

            case "keydown":

                switch (evt.keyCode) {
                    case 37: // left arrow
                        this.vx = -5;
                        this.direction = -1;
                        break;
                    case 39: // right arrow
                        this.vx = 5;
                        this.direction = 1;
                        break;
                    case 38: // up arrow
                        if (this.vy == 0) this.vy = -20;
                        break;
                    case 32: //space
                        this.action += 1;
                        break;
                }
                break;

            case "keyup":
                switch (evt.keyCode) {
                    case 37: //left arrow
                        this.direction = -1;
                        this.vx = 0;
                        break;
                    case 39: //right arrow
                        this.direction = 1;
                        this.vx = 0;
                        break;
                }
                break;

        }
    }

}

export default Player