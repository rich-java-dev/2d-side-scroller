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



class Level6 extends Level {

    public constructor() {
        super()

        this.player.sword = false
        this.player.bow = true

        this.spawnX = 200
        this.spawnY = -2000
        this.player.x = this.spawnX
        this.player.y = this.spawnY

        this.platforms = [
            new Wall(0, -2100, 100, 3000),
            new Wall(2000, -2100, 100, 2700),
            new Wall(0, -2100, 2000, 100),

            new Wall(0, -1550, 1800, 100),
            new TrapDoor(1800, -1550, 200, 100),

            new Wall(300, -1050, 1800, 100),
            new TrapDoor(100, -1050, 200, 100),

            new Wall(0, -500, 1800, 100),
            new TrapDoor(1800, -500, 200, 100),

            new Wall(300, 50, 1800, 100),
            new TrapDoor(100, 50, 200, 100),

            new Door(2000, 600, 100, 200),

            new Ground(0, 700 + 70, 2600, 900),

        ]

        this.enemies = [

            new Slime(1200, -2000, 4, new Key()),
            new Slime(800, -2000, 2.5, null),

            new Zombie(1400, -1150, 2, null),
            new Zombie(900, -1150, 2, new Key()),
            new Zombie(800, -1150, 1, null),

            new Skeleton(1400, -600, 2, new Key()),
            new Skeleton(900, -600, 3, null),
            new Skeleton(800, -600, 2.5, null),

            new Bat(1400, 0, 2, null),
            new Bat(900, 0, 3, null),
            new Bat(700, 0, 2.5, new Key()),

            new Slime(1200, 300, 3, null),
            new Bat(600, 250, 3, null),
            new Bat(850, 250, 3, new Key()),
            new Zombie(1500, 400, 2, null),
            new Skeleton(1940, 400, -2, new Key()),

        ]


        this.goal = new Goal(2300, 570)

        this.hint = "SHIFT toggles between Sword and Bow"

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