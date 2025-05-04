import Level from './Level'
import Platform from '../platforms/Platform'
import Ground from '../platforms/Ground'
import Wall from '../platforms/Wall'
import Door from '../platforms/Door'
import TrapDoor from '../platforms/TrapDoor'
import Key from '../items/Key'
import Goal from '../Goal'

import Zombie from '../enemies/Zombie'
import Bat from '../enemies/Bat'
import Skeleton from '../enemies/Skeleton'
import Slime from '../enemies/Slime'



class Level7 extends Level {

    public constructor() {
        super()

        this.player.sword = false
        this.player.bow = true

        this.spawnX = 200
        this.spawnY = -3200
        this.player.x = this.spawnX
        this.player.y = this.spawnY

        this.platforms = [
            new Wall(0, -3500, 100, 500),
            new Ground(0, -3100, 400, 4000),
            new Ground(0, 700, 1500, 500),
            new Ground(1000, -3100, 1000, 4000),


            new Platform(925, 525, 75, 20, "brown"),
            new Platform(925, 350, 75, 20, "brown"),
            new Platform(925, 200, 75, 20, "brown"),
            new Platform(925, 50, 75, 20, "brown"),
            new Platform(925, -100, 75, 20, "brown"),
            new Platform(925, -250, 75, 20, "brown"),
            new Platform(925, -400, 75, 20, "brown"),
            new Platform(925, -550, 75, 20, "brown"),
            new Platform(925, -700, 75, 20, "brown"),
            new Platform(925, -850, 75, 20, "brown"),
            new Platform(925, -1000, 75, 20, "brown"),
            new Platform(925, -1150, 75, 20, "brown"),
            new Platform(925, -1300, 75, 20, "brown"),
            new Platform(925, -1450, 75, 20, "brown"),
            new Platform(925, -1600, 75, 20, "brown"),
            new Platform(925, -1750, 75, 20, "brown"),
            new Platform(925, -1900, 75, 20, "brown"),
            new Platform(925, -2050, 75, 20, "brown"),
            new Platform(925, -2200, 75, 20, "brown"),
            new Platform(925, -2350, 75, 20, "brown"),
            new Platform(925, -2500, 75, 20, "brown"),
            new Platform(925, -2650, 75, 20, "brown"),
            new Platform(925, -2800, 75, 20, "brown"),
            new Platform(925, -2950, 75, 20, "brown"),
            

        ]

        this.enemies = [

            new Bat(800, -2600, 1, null),
            new Bat(800, -2400, -2, null),
            new Bat(800, -2200, 3, null),
            new Bat(800, -2000, -2, null),
            new Bat(850, -1600, 2, null),
            new Bat(800, -1200, -3, null),
            new Bat(850, -1000, 3, null),
            new Bat(800, -800, 2, null),
            new Bat(800, -400, -5, null),
            new Bat(850, 0, 5, null),
            new Bat(800, 250, -5, null),
            new Bat(850, 500, 5, null),

        ]


        this.goal = new Goal(1050, -3300)

        this.hint = "Cross the Chasm"

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

export default Level7;