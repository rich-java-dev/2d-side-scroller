import Level from './Level'
import Platform from './Platform'
import Ground from './Ground'
import Enemy from './Enemy'
import Goal from './Goal'

class Level2 extends Level {

    public constructor() {
        super()

        this.platforms = [
            new Ground(0, 700 + 70, 2000, 900),
            new Platform(200, 700 + 30, 800, 50, "brown"),
            new Platform(300, 700 - 10, 600, 50, "brown"),
            new Platform(400, 700 - 50, 400, 50, "brown"),
            new Platform(500, 700 - 90, 200, 50, "brown"),
            new Ground(2100, 700, 400, 900),

            new Ground(2650, 700, 400, 900),

            new Platform(3200, 700 - 40, 200, 50, "gray"),
            new Platform(3500, 700 - 40, 200, 50, "gray"),
            new Platform(3820, 700 - 40, 300, 50, "gray"),
            new Ground(4300, 700, 2000, 900),
        ]




        this.goal = new Goal(5000, 500)

        this.hint = "jump with up arrow key"

    }


}

export default Level2;