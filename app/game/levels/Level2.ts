import Level from './Level'
import Platform from '../platforms/Platform'
import Ground from '../platforms/Ground'
import Enemy from '../enemies/Enemy'
import Goal from '../Goal'

class Level2 extends Level {

    public constructor() {
        super()
        this.player.sword = false
        this.platforms = [
            new Ground(0, 700 + 70, 1000, 900),
            new Platform(200, 700 + 30, 800, 50, "brown"),
            new Platform(300, 700 - 10, 600, 50, "brown"),
            new Platform(400, 700 - 50, 400, 50, "brown"),
            new Platform(500, 700 - 90, 200, 50, "brown"),
            new Ground(1100, 700, 400, 900),

            new Ground(1650, 700, 400, 900),

            new Platform(2200, 700 - 40, 200, 50, "gray"),
            new Platform(2500, 700 - 40, 200, 50, "gray"),
            new Platform(2820, 700 - 40, 300, 50, "gray"),
            new Ground(3290, 700, 1000, 900),
        ]

        this.goal = new Goal(4000, 500)

        this.hint = "jump with up arrow key"

    }

    public skyBackground(ctx: any) {
        if (this.sky == null) {
            let image = new Image(80, 80)
            image.src = 'images/clouds2.png'
            this.sky = ctx.createPattern(image, "repeat");
        }
        return this.sky
    }


}

export default Level2;