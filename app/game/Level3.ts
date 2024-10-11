import Level from './Level'
import Platform from './Platform'
import Ground from './Ground'
import Enemy from './Enemy'
import Goal from './Goal'

class Level3 extends Level {

    public constructor() {
        super()

        this.platforms = [
            new Ground(0, 700 + 70, 3000, 900),
            new Platform(200, 700 + 30, 800, 50, "brown"),
            new Platform(300, 700 - 10, 600, 50, "brown"),
            new Platform(400, 700 - 50, 400, 50, "brown"),
            new Platform(500, 700 - 90, 200, 50, "brown"),
        ]

        this.enemies = [
            new Enemy(900, 600, 50, 50, "red", 1, 1),
            new Enemy(1200, 600, 50, 50, "red", -1, -2),
            new Enemy(1500, 600, 50, 50, "red", 1, 2),
            new Enemy(1600, 600, 50, 50, "red", -1, -1.5),
            new Enemy(2000, 600, 50, 50, "red", 1, 3),
        ]


        this.goal = new Goal(2750, 580)

        this.hint = "Watch out for enemies! press the space bar to swing"

    }


}

export default Level3;