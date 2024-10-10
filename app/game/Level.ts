
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

        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "cyan";
        this.ctx.fill();

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


}

export default Level