import Level from './Level'
import Platform from './Platform'
import Ground from './Ground'
import Enemy from './Enemy'
import Zombie from './Zombie'
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
            new Zombie(900, 400, 1),
            new Zombie(1200, 400, -2),
            new Zombie(1500, 400, 2),
            new Zombie(1600, 400, 1.5),
            new Zombie(2000, 400, -2),

            new Zombie(1250, 400, 3),
            new Zombie(1200, 400, -3),
            new Zombie(1300, 400, 4),
            new Zombie(2500, 400, -3),
            new Zombie(2200, 400, -1),
        ]


        this.goal = new Goal(2750, 580)

        this.hint = "Watch out for enemies! press the space bar to swing"

    }


}

export default Level3;