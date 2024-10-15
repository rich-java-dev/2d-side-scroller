import Level from './Level'
import Platform from '../platforms/Platform'
import Ground from '../platforms/Ground'
import Wall from '../platforms/Wall'
import Enemy from '../enemies/Enemy'
import Goal from '../Goal'

class Level1 extends Level {

    public constructor() {
        super()

        this.spawnX = 400
        this.spawnY = 500
        this.player.x = this.spawnX
        this.player.y = this.spawnY

        this.player.sword = false
        this.platforms = [
            new Ground(0, 700 + 70, 2000, 900),
            new Wall(0, 200, 100, 570)
        ]

        this.goal = new Goal(1750, 570)

        this.hint = "walk with left and right arrow keys"

    }


}

export default Level1;