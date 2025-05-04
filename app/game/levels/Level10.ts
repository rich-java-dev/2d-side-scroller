import Level from './Level'
import Platform from '../platforms/Platform'
import Ground from '../platforms/Ground'
import CaveEntrance from '../platforms/CaveEntrance'
import TrapDoor from '../platforms/TrapDoor'
import Door from '../platforms/Door'
import Key from '../items/Key'
import Ghost from '../enemies/Ghost'
import Spider from '../enemies/Spider'
import Goal from '../Goal'

class Level10 extends Level {

    public constructor() {
        super()

        this.spawnX = 600
        this.spawnY = -350
        this.player.x = this.spawnX
        this.player.y = this.spawnY

        this.platforms = [
            new Ground(-500, -200, 2500, 2500),
            new Ground(1900, 500, 2500, 2500),
            // new CaveEntrance(0,-400, 800, 500,"brown"),

            // new Door(1930, 560, 30, 220),
            // new Door(2180, 560, 30, 220),
            // new TrapDoor(1930, 560, 250, 30),


        ]

        this.enemies = [
            new Spider(1400, -300, 5, null),
            new Spider(1400, -300, -3, null),
            new Spider(1400, -300, 4, null),
        ]


        this.goal = new Goal(4450, 470)

        this.hint = "Don't fall in the water!"

    }

    public skyBackground(ctx: any) {
        if (this.sky == null) {
            let image = new Image(80, 80)
            image.src = 'images/cave.png'
            this.sky = ctx.createPattern(image, "repeat");
        }
        return this.sky
    }


}

export default Level10;