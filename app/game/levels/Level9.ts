import Level from './Level'
import Platform from '../platforms/Platform'
import Ground from '../platforms/Ground'
import TrapDoor from '../platforms/TrapDoor'
import Door from '../platforms/Door'
import CaveEntrance from '../platforms/CaveEntrance'
import Key from '../items/Key'
import Ghost from '../enemies/Ghost'
import Goal from '../Goal'

class Level9 extends Level {

    public constructor() {
        super()

        this.spawnX = 600
        this.spawnY = 400
        this.player.x = this.spawnX
        this.player.y = this.spawnY

        this.platforms = [
            new Ground(-1000, 700 + 70, 4000, 900),
            new Platform(350, 700 + 30, 500, 50, "brown"),
            new Platform(450, 700 - 10, 300, 50, "brown"),

            new CaveEntrance(1650, 290, 800, 500, "brown"),
            new Door(1930, 560, 30, 220),
            new Door(2180, 560, 30, 220),
            new TrapDoor(1930, 560, 250, 30),


        ]

        this.enemies = [
            new Ghost(1200, 300, 4, new Key()),
        ]


        this.goal = new Goal(1950, 580)

        this.hint = "Reach the cave"

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

export default Level9;