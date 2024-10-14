import Level from './Level'
import Platform from '../platforms/Platform'
import Ground from '../platforms/Ground'
import Wall from '../platforms/Wall'
import Door from '../platforms/Door'
import Key from '../items/Key'
import Goal from '../Goal'

import Zombie from '../enemies/Zombie'
import Bat from '../enemies/Bat'
import Skeleton from '../enemies/Skeleton'
import Slime from '../enemies/Slime'



class Level6 extends Level {

    public constructor() {
        super()

        this.player.sword=false
        this.player.bow=true

        this.player.y = 400
        this.platforms = [
            new Wall(0, 100, 100, 800),
            new Wall(0, 100, 2000, 100),
            new Wall(2000, 100, 100, 500),
            new Door(2000, 600, 100, 200),

            new Ground(0, 700 + 70, 2600, 900),
            new Platform(200, 700 + 30, 800, 50, "brown"),
            new Platform(300, 700 - 10, 600, 50, "brown"),
            new Platform(400, 700 - 50, 400, 50, "brown"),
            new Platform(500, 700 - 90, 200, 50, "brown"),


        ]

        this.enemies = [

            new Skeleton(120, 400, -1, null),
            new Bat(200, 300, 3, null),
            new Slime(1200, 300, 3, null),
            new Bat(600, 300, 3, null),
            new Slime(1400, 300, -2, null),
            new Bat(850, 300, 3, new Key()),
            new Zombie(1500, 400, 2),
            new Skeleton(1940, 400, -2, new Key()),

        ]


        this.goal = new Goal(2300, 570)

        this.hint = "TAB toggles between Sword and Bow"

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

export default Level6;