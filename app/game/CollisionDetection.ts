import GameObject from './GameObject'
import Player from './Player'
import Enemy from './enemies/Enemy'
import Projectile from './Projectile'
import Door from './platforms/Door'
import Item from './items/Item'
import Key from './items/Key'



const detectEnemyPlayerCollision = (o1: Player, o2: Enemy): boolean => {
    return (o1.invinsibility == 0
        && o2.hp > 0
        && o2.x < o1.x + o1.width
        && o2.x + o2.width > o1.x + o1.width
        && o1.y + o1.height > o2.y
        && o1.y < o2.y + o2.height
    )
}


const detectPlayerHitEnemy = (o1: Player, o2: Enemy): boolean => {
    return (o1.action > 0
        && (o2.x < o1.x + o1.direction * 80 || o2.x < o1.x)
        && o2.x + o2.width > o1.x + o1.width + o1.direction * 80
        && o1.y + o1.height > o2.y
        && o1.y < o2.y + o2.height
    )
}


const detectPlayerPlatformCollision = (o1: Player, o2: GameObject): boolean => {
    return (o2.x < o1.x + o1.width
        && (o2.x + o2.width > o1.x + o1.width || o2.x + o2.width > o1.x)
        && Math.abs(o2.y - o1.y - o1.height) < 10)

}

const detectPlayerWallCollision = (o1: Player, o2: GameObject): boolean => {
    return (o2.x < o1.x + o1.width
        && (o2.x + o2.width > o1.x + o1.width || o2.x + o2.width > o1.x)
        && o1.y + o1.height > o2.y
        && o1.y < o2.y + o2.height)
}

const detectPlayerItemCollision = (o1: Player, o2: Item): boolean => {
    return detectPlayerWallCollision(o1, o2)
}

const detectPlayerDoorCollision = (o1: Player, o2: Door): boolean => {
    return (o2.locked && detectPlayerWallCollision(o1, o2))
}

const detectEnemyWallCollision = (o1: Enemy, o2: GameObject): boolean => {
    return (o2.x < o1.x + o1.width
        && (o2.x + o2.width > o1.x + o1.width || o2.x + o2.width > o1.x)
        && o1.y + o1.height > o2.y
        && o1.y < o2.y + o2.height)

}


const detectEnemyPlatformCollision = (o1: Enemy, o2: GameObject): boolean => {
    return (o2.x < o1.x + o1.width
        && o2.x + o2.width > o1.x + o1.width
        && Math.abs(o2.y - o1.y - o1.height) < 10)

}


const detectGoalCollision = (o1: Player, o2: GameObject): boolean => {
    return (o2.x + 90 < o1.x + o1.width
        && o2.x + o2.width > o1.x + o1.width
        && o2.y < o1.y
        && o2.y + o2.height > o1.y
    )
}

const detectProjectileHitEnemy = (o1: Projectile, o2: Enemy) => {
    return detectEnemyWallCollision(o2, o1)
}



export {
    detectPlayerPlatformCollision,
    detectPlayerWallCollision,
    detectPlayerItemCollision,
    detectPlayerDoorCollision,
    detectPlayerHitEnemy,

    detectEnemyPlatformCollision,
    detectEnemyWallCollision,
    detectEnemyPlayerCollision,
    detectProjectileHitEnemy,

    detectGoalCollision,
}