import Translate from '../Translation';
import Level from './Level'
import Level1 from './Level1'
import Level2 from './Level2'
import Level3 from './Level3'
import Level4 from './Level4'
import Level5 from './Level5'
import Level6 from './Level6'
import Level7 from './Level7'
import Level8 from './Level8'

import Sounds from '../Sounds'

class LevelManager {

    public width: number = 0;
    public height: number = 0;
    public ctx: any;

    public levels: Level[] = []
    public activeLevel: Level = new Level()
    public levelIdx = 1

    public gameOver: boolean = false;

    public constructor() {
        // Sounds.song1()
        this.levels = [
            new Level1(),
            new Level2(),
            new Level3(),
            new Level4(),
            new Level5(),
            new Level6(),
            new Level8(),
            new Level7(),
        ]
    }

    public activateNextLevel = async () => {
        this.activeLevel = this.levels[0]
        this.activeLevel.ctx = this.ctx;
        this.activeLevel.width = this.width;
        this.activeLevel.height = this.height;
    }


    public step = () => {
        if (this.gameOver) {
            this.ctx.font = "75px Arial bold";
            this.ctx.fillStyle = "red"

            let message = "GAME OVER - Press R to retry"
            if (this.levels.length == 0)
                message = "YOU WON!"

            this.ctx.fillText(message, 180, 400);

            if (this.activeLevel.player.hp > 0)
                this.gameOver = false

            return;
        }

        if (this.activeLevel.isCleared()) {
            Sounds.winSound()
            this.levels.shift()
            this.levelIdx++;
            if (this.levels.length > 0)
                this.activateNextLevel()
            else {
                this.gameOver = true;
                return;
            }
        }

        if (this.activeLevel.player.hp <= 0) {
            this.gameOver = true;
            return
        }

        this.activeLevel.step()
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("LEVEL " + this.levelIdx, 10, 40);
        this.activeLevel.printHint()

    }

    public controller = (evt: any) => {
        this.activeLevel.player.controller(evt);
    }

}

export default LevelManager