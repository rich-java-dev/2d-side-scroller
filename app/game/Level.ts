
import Goal from './Goal'
import Enemy from './Enemy'
import GameObject from './GameObject'
import Platform from './Platform'
import Player from './Player'
import { detectGoalCollision } from './CollisionDetection'


class Level {

    public id = 0;

    public width: number = 0;
    public height: number = 0;
    public ctx: any;

    public player: Player = new Player()
    public goal: Goal = new Goal(5000, 0)
    public enemies: Enemy[] = []
    public platforms: Platform[] = []

    public sky: any = null;

    public hint: string = ""


    public constructor() {
    }

    public step = () => {
        this.update()
        this.drawToCanvas()
    }


    public update = () => {
        this.player.update(this.platforms)
        this.enemies.map(e => e.update(this.platforms))
    }

    public drawToCanvas = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.drawSky(this.player.x);

        this.platforms.map(o => o.draw(this.ctx, this.player.x))
        this.goal.draw(this.ctx, this.player.x)
        this.enemies.map(e => e.draw(this.ctx, this.player.x))
        this.player.draw(this.ctx)
    }

    public isCleared = (): boolean => {
        return detectGoalCollision(this.player, this.goal)
    }

    public printHint = () => {
        this.ctx.fillText(this.hint, 10, 100)
    }


    public drawSky = (offset: number) => {
        this.ctx.save()
        this.ctx.translate(-offset / 2, 0)
        this.ctx.fillStyle = this.skyBackground(this.ctx)
        this.ctx.fillRect(0, 0, this.width*10, this.height)
        this.ctx.restore()
    }

    public skyBackground = (ctx: any) => {
        if (this.sky == null) {
            let image = new Image(80, 80)
            image.src = 'images/clouds.png'
            this.sky = ctx.createPattern(image, "repeat");
        }
        return this.sky
    }


}

export default Level