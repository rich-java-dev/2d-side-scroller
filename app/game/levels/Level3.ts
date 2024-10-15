import Level from './Level'
import Platform from '../platforms/Platform'
import Ground from '../platforms/Ground'
import Enemy from '../enemies/Enemy'
import Zombie from '../enemies/Zombie'
import Goal from '../Goal'

class Level3 extends Level {

    public constructor() {
        super()

        this.spawnX = 600
        this.spawnY = 400
        this.player.x = this.spawnX
        this.player.y = this.spawnY

        this.platforms = [
            new Ground(0, 700 + 70, 3000, 900),
            new Platform(200, 700 + 30, 800, 50, "brown"),
            new Platform(300, 700 - 10, 600, 50, "brown"),
            new Platform(400, 700 - 50, 400, 50, "brown"),
            new Platform(500, 700 - 90, 200, 50, "brown"),
        ]

        this.enemies = [
            new Zombie(900, 400, 1, null),
            new Zombie(1200, 400, -2, null),
            new Zombie(1500, 400, 2, null),
            new Zombie(1600, 400, 1.5, null),
            new Zombie(2000, 400, -2, null),
            new Zombie(1300, 400, 4, null),
            new Zombie(2500, 400, -3, null),
            new Zombie(2200, 400, -1, null),
        ]


        this.goal = new Goal(2750, 580)

        this.hint = "Watch out for enemies! press the space bar to swing"

    }

    public skyBackground(ctx: any) {
        if (this.sky == null) {
            let image = new Image(80, 80)
            image.src = 'images/clouds3.png'
            this.sky = ctx.createPattern(image, "repeat");
        }
        return this.sky
    }


}

export default Level3;