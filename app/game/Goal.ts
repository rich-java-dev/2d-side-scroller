import Platform from '../game/Platform'
import GameObject from './GameObject'
import { playerScreenPosition } from './Constants';


class Goal implements GameObject {

    public x: number = 0;
    public y: number = 0;
    public width: number = 200;
    public height: number = 200;
    public color: string = "yellow";

    public platforms: Platform[] = []

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;

        this.platforms = [
            new Platform(this.x, this.y, this.width, 30, this.color),
            new Platform(this.x, this.y, 30, this.height, this.color),
            new Platform(this.x + 200, this.y, 30, 200, this.color),
        ]

    }

    public draw = (ctx: any, offset: number) => {
        this.platforms.map(p => p.draw(ctx, offset))
    }

}


export default Goal