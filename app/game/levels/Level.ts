
import Goal from '../Goal'
import Enemy from '../enemies/Enemy'
import Projectile from '../Projectile'
import GameObject from '../GameObject'
import Platform from '../platforms/Platform'
import Ground from '../platforms/Ground'
import Wall from '../platforms/Wall'
import Door from '../platforms/Door'
import Item from '../items/Item'
import Key from '../items/Key'
import Player from '../Player'
import Translate from '../Translation'
import {
    detectPlayerPlatformCollision,
    detectPlayerWallCollision,
    detectPlayerHitEnemy,
    detectPlayerDoorCollision,
    detectPlayerItemCollision,
    detectProjectileHitEnemy,

    detectEnemyPlatformCollision,
    detectEnemyWallCollision,
    detectEnemyPlayerCollision,

    detectGoalCollision,


} from '../CollisionDetection'


class Level {

    public id = 0;

    public width: number = 0;
    public height: number = 0;
    public ctx: any;

    public player: Player = new Player()
    public projectiles: Projectile[] = []

    public goal: Goal = new Goal(5000, 0)
    public enemies: Enemy[] = []
    public platforms: Platform[] = []
    public items: Item[] = []


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
        this.detectPlayerItemCollisions()
        this.detectPlayerFireArrow()
        this.updateProjectiles()
        this.updateAllEnemies()
    }

    public updateProjectiles = () => {
        this.projectiles.map((p, idx) => {
            p.update()
            if (p.time > p.duration) this.projectiles.splice(idx, 1)
        })
    }

    public updateAllEnemies = () => {
        this.enemies.map(enemy => {
            enemy.update()
            this.detectEnemyPlatformCollisions(enemy)

            if (detectPlayerHitEnemy(this.player, enemy)) {
                enemy.takeDamage()
                if (enemy.hp <= 0) {
                    let drops = enemy.dropItems()
                    this.items = [...this.items, ...drops]
                }
                // let idx = this.enemies.indexOf(enemy)
                // this.enemies.splice(idx, 1)
            }

            this.projectiles.map((p) => {
                if (detectProjectileHitEnemy(p, enemy)) {
                    enemy.takeDamage()
                    if (enemy.hp <= 0) {
                        let drops = enemy.dropItems()
                        this.items = [...this.items, ...drops]
                    }
                }
            })

            if (detectEnemyPlayerCollision(this.player, enemy)) {
                this.player.takeDamage()
                this.player.vx = 0
                this.player.vy = 0
            }

            detectPlayerHitEnemy(this.player, enemy)
        })
    }

    public detectPlayerPlatformCollisions = () => {
        this.platforms.map((p, idx) => {

            if (detectPlayerPlatformCollision(this.player, p)) {
                this.player.y = p.y - this.player.height
                if (this.player.vy > 0) this.player.vy = 0

            }

            if (p instanceof Ground || p instanceof Wall)
                if (detectPlayerWallCollision(this.player, p)) {
                    this.player.vx = 0
                    this.player.x -= this.player.direction * 5
                }

            if (p instanceof Door) {
                if (detectPlayerDoorCollision(this.player, p)) {
                    this.player.items.map((item, itemIdx) => {
                        if (item instanceof Key) {
                            if (p.locked) {
                                this.platforms.splice(idx, 1)
                                this.player.items.splice(itemIdx, 1)
                            }
                        }
                    })
                    if (p.locked) {
                        this.player.vx = 0
                        this.player.x -= this.player.direction * 5
                    }
                }
            }

        })
    }


    public detectPlayerItemCollisions = () => {
        this.items.map((item, idx) => {
            if (detectPlayerItemCollision(this.player, item)) {
                this.player.collectItem(item)
                this.items.splice(idx, 1)
            }
        })
    }

    public detectPlayerFireArrow = () => {
        if (this.player.fireArrow) {
            const arrowX = (this.player.bowUp ? 1 / Math.SQRT2 : 1) * this.player.direction * this.player.bowAction
            const arrowY = (this.player.bowUp ? -1 / Math.SQRT2 : 0) * this.player.bowAction
            this.projectiles.push(new Projectile(this.player.x, this.player.y, arrowX, arrowY))
            this.player.fireArrow = false
            this.player.bowAction = 0
        }
    }

    public detectEnemyPlatformCollisions = (enemy: Enemy) => {
        this.platforms.map(p => {
            if (detectEnemyPlatformCollision(enemy, p)) {
                enemy.y = p.y - enemy.height
                if (enemy.vy > 0) enemy.vy = 0
            }
            if (p instanceof Ground || p instanceof Wall || p instanceof Door)
                if (detectEnemyWallCollision(enemy, p)) {
                    enemy.direction *= -1
                    enemy.vx *= enemy.direction
                    enemy.x += enemy.direction * 5
                }
        })
    }

    public detectPlayerFallDamage = () => {
        if (this.player.y > this.deathPlane) {
            this.player.y = 100
            this.player.vy = 0
            this.player.x = 500
            this.player.takeDamage()
        }
    }


    public drawToCanvas = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.drawSky(this.player.x, this.player.y);

        this.platforms.map(o => o.draw(this.ctx, this.player.x, this.player.y))
        this.goal.draw(this.ctx, this.player.x, this.player.y)
        this.enemies.map(e => e.draw(this.ctx, this.player.x, this.player.y))
        this.items.map(i => i.draw(this.ctx, this.player.x, this.player.y))
        this.projectiles.map(p => {
            console.log("Drawing Projectile")
            p.draw(this.ctx, this.player.x, this.player.y)
        })
        this.player.draw(this.ctx)
    }

    public isCleared = (): boolean => {
        return detectGoalCollision(this.player, this.goal)
    }

    public printHint = () => {
        this.ctx.fillText(this.hint, 10, 100)
    }

    public drawSky = (offsetX: number, offsetY: number) => {
        this.ctx.save()
        this.ctx.translate(-offsetX / 2, offsetY < Translate.thresholdY ? -offsetY / 4 : -Translate.thresholdY / 4)
        this.ctx.fillStyle = this.skyBackground(this.ctx)
        this.ctx.fillRect(-this.width, -this.height, this.width * 5, this.height * 5)
        this.ctx.restore()
    }

    public skyBackground(ctx: any) {
        if (this.sky == null) {
            let image = new Image()
            image.src = 'images/clouds.png'
            this.sky = ctx.createPattern(image, "repeat");
        }
        return this.sky
    }


}

export default Level