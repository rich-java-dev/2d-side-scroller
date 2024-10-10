import GameObject from './GameObject'
import Player from './Player'
import Enemy from './Enemy'
import { playerScreenPosition } from './Constants'

const detectPlayerPlatformCollision = (o1: Player, o2: GameObject): boolean => {

    if ((o2.x - playerScreenPosition) < o1.x + o1.width
        && (o2.x - playerScreenPosition) + o2.width > o1.x + o1.width
        && Math.abs(o2.y - o1.y - o1.height) < 10)
        return true

    return false;
}


const detectEnemyPlatformCollision = (o1: Enemy, o2: GameObject): boolean => {

    if ((o2.x - playerScreenPosition) < o1.x + o1.width
        && (o2.x - playerScreenPosition) + o2.width > o1.x + o1.width
        && Math.abs(o2.y - o1.y - o1.height) < 10)
        return true

    return false;
}


const detectGoalCollision = (o1: Player, o2: GameObject): boolean => {

    if ((o2.x - playerScreenPosition) + 90 < o1.x + o1.width
        && (o2.x - playerScreenPosition) + o2.width > o1.x + o1.width
        && o2.y < o1.y
        && o2.y + o2.height > o1.y
    )
        return true

    return false;

}

export {
    detectPlayerPlatformCollision,
    detectEnemyPlatformCollision,
    detectGoalCollision,
}