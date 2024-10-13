
import Goal from './Goal'
import Enemy from './Enemy'
import GameObject from './GameObject'
import Platform from './Platform'
import Ground from './Ground'
import Player from './Player'
import { detectGoalCollision, detectPlayerPlatformCollision, detectEnemyPlatformCollision, detectEnemyPlayerCollision, detectPlayerHitEnemy, detectPlayerWallCollision } from './CollisionDetection'


class Level {

    public id = 0;

    public width: number = 0;
    public height: number = 0;
    public ctx: any;

    public player: Player = new Player()
    public goal: Goal = new Goal(5000, 0)
    public enemies: Enemy[] = []
    public platforms: Platform[] = []
    public deathPlane: number = 2000

    public sky: any = null;

    public hint: string = ""


    public constructor() {
    }

    public step = () => {
        this.update()
        this.drawToCanvas()
    }


    public update = () => {

        this.player.update()
        this.detectPlayerFallDamage()
        this.detectPlayerPlatformCollisions()


        this.enemies.map(enemy => {
            enemy.update()
            this.detectEnemyPlatformCollisions(enemy)

            if (detectPlayerHitEnemy(this.player, enemy)) {
                enemy.takeDamage()
                // let idx = this.enemies.indexOf(enemy)
                // this.enemies.splice(idx, 1)
            }
            if (detectEnemyPlayerCollision(this.player, enemy)) {
                this.player.takeDamage()
                this.player.vx = 0
                this.player.vy = 0
            }

            detectPlayerHitEnemy(this.player, enemy)
        })

    }


    public detectPlayerPlatformCollisions = () => {
        this.platforms.map(p => {
            if (detectPlayerPlatformCollision(this.player, p)) {
                this.player.y = p.y - this.player.height
                if (this.player.vy > 0) this.player.vy = 0
            }
            if (p instanceof Ground)
                if (detectPlayerWallCollision(this.player, p)) {
                    this.player.vx = 0
                    this.player.x -= this.player.direction * 5
                }
        })
    }

    public detectEnemyPlatformCollisions = (enemy: Enemy) => {
        this.platforms.map(p => {
            if (detectEnemyPlatformCollision(enemy, p)) {
                enemy.y = p.y - enemy.height
                if (enemy.vy > 0) enemy.vy = 0
            }
        })
    }

    public detectPlayerFallDamage = () => {
        if (this.player.y > this.deathPlane) {
            this.player.y = 100
            this.player.vy = 0
            this.player.x = 0
            this.player.takeDamage()
        }
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
        this.ctx.fillRect(-this.width, 0, this.width * 10, this.height)
        this.ctx.restore()
    }

    public skyBackground(ctx: any) {
        if (this.sky == null) {
            let image = new Image(80, 80)
            image.src = 'images/clouds.png'
            this.sky = ctx.createPattern(image, "repeat");
        }
        return this.sky
    }


}

export default Level