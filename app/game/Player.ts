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

    public hp: number = 3

    private swordPattern: any = null;
    private heartPattern: any = null;

    public constructor() {
    }


    public draw = (ctx: any) => {
        ctx.save();
        ctx.translate(this.x, 0)
        ctx.lineWidth = 8;

        // body
        ctx.fillStyle = "brown"
        ctx.fillRect(playerScreenPosition - this.x - 5, this.y, 10, 50)

        // arms
        ctx.strokeStyle = "brown"
        ctx.beginPath();
        ctx.moveTo(playerScreenPosition - this.x, this.y + 10);
        ctx.lineTo(playerScreenPosition - this.x + 10 + 5 * Math.sin(this.action / 2) + (Math.ceil(Math.abs(this.x)) % 35) / 10, this.y + 60 + 5 * Math.sin(this.action / 2));
        ctx.moveTo(playerScreenPosition - this.x, this.y + 10);
        ctx.lineTo(playerScreenPosition - this.x - 10 - 5 * Math.sin(this.action / 2) - (Math.ceil(Math.abs(this.x)) % 35) / 10, this.y + 60 + 5 * Math.sin(this.action / 2));
        ctx.stroke();


        // legs
        ctx.strokeStyle = "blue"
        ctx.beginPath();
        ctx.moveTo(playerScreenPosition - this.x, this.y + 50);
        ctx.lineTo(playerScreenPosition - this.x + 5 + (Math.ceil(Math.abs(this.x)) % 40) / 4, this.y + 100);
        ctx.moveTo(playerScreenPosition - this.x, this.y + 50);
        ctx.lineTo(playerScreenPosition - this.x - 5 - (Math.ceil(Math.abs(this.x)) % 40) / 4, this.y + 100);
        ctx.stroke();



        //head
        ctx.fillStyle = "gray"
        ctx.beginPath();
        ctx.arc(playerScreenPosition - this.x, this.y, 25, 0, Math.PI * 2, true); // draw circle for head
        ctx.fill()


        // sword
        if (this.swordPattern == null) {
            console.log("Loading Sword")
            let image = new Image(12, 85)
            image.src = 'images/sword.png'
            this.swordPattern = ctx.createPattern(image, "no-repeat");
        }
        ctx.fillStyle = this.swordPattern
        let rotateAngle = -1.8

        let swordOffset = this.direction == -1 ? 5 : -2
        ctx.translate(playerScreenPosition - this.x + this.direction * 15 + swordOffset, this.y + 60 - swordOffset)
        ctx.rotate(this.direction * rotateAngle - this.direction * Math.cos(this.action))
        ctx.fillRect(0, 0, 12, 85)

        // display hearts
        ctx.restore()
        if (this.heartPattern == null) {
            console.log("Loading Heart")
            let image = new Image(50, 50)
            image.src = 'images/heart.png'
            this.heartPattern = ctx.createPattern(image, "repeat");
        }

        for (let i = 0; i < this.hp; i++) {
            ctx.fillStyle = this.heartPattern
            ctx.fillRect((i + 1) * 50, 150, 50, 50)
            // ctx.stroke()
        }

        ctx.restore();
    }


    public update = (platforms: Platform[]) => {

        this.vy++
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
            this.hp--;
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
                        if (this.vy == 0) {
                            this.vy = -20;
                            this.jumpSound()
                        }
                        break;

                    case 32: //space
                        if (this.action == 0) {
                            this.action++
                            this.hitSound()
                        }
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

    public jumpSound = () => {
        let audio = new Audio('sounds/jump.wav');
        audio.play();
    }

    public hitSound = () => {
        let audio = new Audio('sounds/hit.wav');
        audio.play();
    }

}

export default Player