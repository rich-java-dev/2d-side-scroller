import Level from './Level'
import Platform from '../platforms/Platform'
import Ground from '../platforms/Ground'
import Zombie from '../enemies/Zombie'
import Skeleton from '../enemies/Skeleton'
import Goal from '../Goal'

class Level4 extends Level {

    public constructor() {
        super()

        this.spawnX = 600
        this.spawnY = 400
        this.player.x = this.spawnX
        this.player.y = this.spawnY

        this.platforms = [
            new Ground(0, 700 + 70, 2500, 900),
            new Platform(200, 700 + 30, 800, 50, "brown"),
            new Platform(300, 700 - 10, 600, 50, "brown"),
            new Platform(400, 700 - 50, 400, 50, "brown"),
            new Platform(500, 700 - 90, 200, 50, "brown"),

            new Platform(2630, 700 + 30, 110, 20, "brown"),
            new Platform(2630, 550 + 30, 110, 20, "brown"),
            new Platform(2630, 400 + 30, 110, 20, "brown"),
            new Platform(2630, 250 + 30, 110, 20, "brown"),

            new Ground(2700, 280, 1500, 900),

        ]

        this.enemies = [

            new Skeleton(1200, 400, -2, null),
            new Zombie(1500, 400, 2, null),
            new Zombie(1600, 400, 1.5, null),
            new Skeleton(2000, 400, -2, null),
            new Zombie(1200, 400, -3, null),
            new Zombie(1300, 400, 4, null),

            new Skeleton(3600, 100, -3, null),
            new Zombie(3800, 100, -1, null),
        ]


        this.goal = new Goal(3950, 80)

        this.hint = "Time to climb..."

    }

    public skyBackground(ctx: any) {
        if (this.sky == null) {
            let image = new Image(80, 80)
            image.src = 'images/clouds4.png'
            this.sky = ctx.createPattern(image, "repeat");
        }
        return this.sky
    }


}

export default Level4;