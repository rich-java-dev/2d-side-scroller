import GameObject from './GameObject'
import Player from './Player'
import { playerPosition } from './Constants'

const collisionYDetected = (o1: Player, o2: GameObject): boolean => {

    if ((o2.x - playerPosition) < o1.x + o1.width
        && (o2.x - playerPosition) + o2.width > o1.x + o1.width
        && Math.abs(o2.y - o1.y - o1.height) < 10)
        return true

    return false;
}

export {
    collisionYDetected
}