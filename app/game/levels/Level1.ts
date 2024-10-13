import Level from './Level'
import Platform from '../platforms/Platform'
import Ground from '../platforms/Ground'
import Enemy from '../enemies/Enemy'
import Goal from '../Goal'

class Level1 extends Level {

    public constructor() {
        super()

        this.player.sword = false
        this.platforms = [
            new Ground(0, 700 + 70, 2000, 900),
            new Ground(0, 100, 100, 900)
        ]

        this.goal = new Goal(1750, 570)

        this.hint = "walk with left and right arrow keys"

    }


}

export default Level1;