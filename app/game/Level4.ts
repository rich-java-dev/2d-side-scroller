import Level from './Level'
import Platform from './Platform'
import Ground from './Ground'
import Enemy from './Enemy'
import Zombie from './Zombie'
import Goal from './Goal'

class Level4 extends Level {

    public constructor() {
        super()

        this.platforms = [
            new Ground(0, 700 + 70, 3000, 900),
            new Platform(200, 700 + 30, 800, 50, "brown"),
            new Platform(300, 700 - 10, 600, 50, "brown"),
            new Platform(400, 700 - 50, 400, 50, "brown"),
            new Platform(500, 700 - 90, 200, 50, "brown"),

            new Platform(3130, 700 + 30, 110, 20, "brown"),
            new Platform(3130, 550 + 30, 110, 20, "brown"),
            new Platform(3130, 400 + 30, 110, 20, "brown"),
            new Platform(3130, 250 + 30, 110, 20, "brown"),
            
            new Ground(3200, 280, 3000, 900),

        ]

        this.enemies = [

            new Zombie(1200, 400, -2),
            new Zombie(1500, 400, 2),
            new Zombie(1600, 400, 1.5),
            new Zombie(2000, 400, -2),
            new Zombie(1200, 400, -3),
            new Zombie(1300, 400, 4),
            
            new Zombie(4400, 100, -3),
            new Zombie(4500, 100, -1),
        ]


        this.goal = new Goal(4750, 80)

        this.hint = "Watch out for enemies! press the space bar to swing"

    }

    public skyBackground(ctx: any) {
        if (this.sky == null) {
            let image = new Image(80, 80)
            image.src = 'images/clouds4.png'
            this.sky = ctx.createPattern(image, "repeat");
        }
        return this.sky
    }


}

export default Level4;