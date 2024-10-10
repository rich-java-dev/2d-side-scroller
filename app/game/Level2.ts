import Level from './Level'
import Platform from './Platform'
import Enemy from './Enemy'
import Goal from './Goal'

class Level2 extends Level {

    public constructor() {
        super()

        this.platforms = [
            new Platform(0, 700 + 70, 2000, 900, "green"),
            new Platform(200, 700 + 30, 800, 50, "brown"),
            new Platform(300, 700 - 10, 600, 50, "brown"),
            new Platform(400, 700 - 50, 400, 50, "brown"),
            new Platform(500, 700 - 90, 200, 50, "brown"),
            new Platform(2100, 700, 1000, 900, "green"),
            new Platform(2200, 700 - 40, 800, 50, "brown"),
            new Platform(2300, 700 - 90, 600, 50, "brown"),
            new Platform(2400, 700 - 130, 400, 50, "brown"),
            new Platform(2500, 700 - 160, 200, 50, "brown"),
            new Platform(3200, 700 - 40, 200, 50, "gray"),
            new Platform(3500, 700 - 40, 200, 50, "gray"),
            new Platform(3820, 700 - 40, 300, 50, "gray"),
            new Platform(4300, 700, 2000, 900, "green"),
        ]


        this.enemies = [
            new Enemy(700, 600, 50, 50, "red")
        ]

        this.goal = new Goal(5000, 500)

        this.hint = "jump with up arrow key"

    }


}

export default Level2;