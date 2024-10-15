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



class Level7 extends Level {

    public constructor() {
        super()

        this.player.sword = false
        this.player.bow = true

        this.player.y = 400
        this.platforms = [
            new Ground(0, 700 + 70, 4000, 900),

            new Wall(2900, 425, 100, 150),
            new Wall(2900, 425, 400, 100),
            new Wall(3300, 425, 100, 350),
            new Door(2900, 575, 100, 200),
        ]

        this.enemies = [

        ]

        this.goal = new Goal(3025, 570)

        this.hint = "Prepare for a Boss Fight!"

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

export default Level7;