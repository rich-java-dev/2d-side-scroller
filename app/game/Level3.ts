import Level from './Level'
import Platform from './Platform'
import Enemy from './Enemy'
import Goal from './Goal'

class Level3 extends Level {

    public constructor() {
        super()

        this.platforms = [
            new Platform(0, 700 + 70, 4000, 900, "tan"),
            new Platform(200, 700 + 30, 800, 50, "brown"),
            new Platform(300, 700 - 10, 600, 50, "brown"),
            new Platform(400, 700 - 50, 400, 50, "brown"),
            new Platform(500, 700 - 90, 200, 50, "brown"),
        ]

        this.goal = new Goal(3750, 580)

        this.hint = "Watch out for enemies! press the space bar to swing"

    }


}

export default Level3;