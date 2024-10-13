import GameObject from './GameObject'
import Player from './Player'
import Enemy from './Enemy'
import { playerScreenPosition } from './Constants'


const detectEnemyPlayerCollision = (o1: Player, o2: Enemy): boolean => {
    return (o1.invinsibility == 0
        && o2.hp > 0
        && o2.x < o1.x + o1.width + playerScreenPosition
        && o2.x + o2.width > o1.x + o1.width + playerScreenPosition
        && o1.y + o1.height > o2.y
        && o1.y < o2.y + o2.height
    )
}


const detectPlayerHitEnemy = (o1: Player, o2: Enemy): boolean => {
    return (o1.action > 0
        && (o2.x < o1.x + playerScreenPosition + o1.direction * 80 || o2.x < o1.x + playerScreenPosition + o1.width)
        && o2.x + o2.width > o1.x + o1.width + playerScreenPosition + o1.direction * 80
        && o1.y + o1.height > o2.y
        && o1.y < o2.y + o2.height
    )
}


const detectPlayerPlatformCollision = (o1: Player, o2: GameObject): boolean => {
    return (o2.x < o1.x + o1.width + playerScreenPosition
        && o2.x + o2.width > o1.x + o1.width + playerScreenPosition
        && Math.abs(o2.y - o1.y - o1.height) < 10)

}


const detectEnemyPlatformCollision = (o1: Enemy, o2: GameObject): boolean => {
    return (o2.x < o1.x + o1.width
        && o2.x + o2.width > o1.x + o1.width
        && Math.abs(o2.y - o1.y - o1.height) < 10)

}


const detectGoalCollision = (o1: Player, o2: GameObject): boolean => {
    return (o2.x + 90 < o1.x + o1.width + playerScreenPosition
        && o2.x + o2.width > o1.x + o1.width + playerScreenPosition
        && o2.y < o1.y
        && o2.y + o2.height > o1.y
    )


}

export {
    detectPlayerPlatformCollision,
    detectEnemyPlatformCollision,
    detectGoalCollision,
    detectEnemyPlayerCollision,
    detectPlayerHitEnemy,
}