import Level from './Level'
import Platform from './Platform'
import Ground from './Ground'
import Enemy from './Enemy'
import Goal from './Goal'

class Level1 extends Level {

    public constructor() {
        super()

        this.platforms = [
            new Ground(0, 700 + 70, 2000, 900)
        ]

        this.goal = new Goal(1750, 570)

        this.hint = "walk with left and right arrow keys"

    }


}

export default Level1;