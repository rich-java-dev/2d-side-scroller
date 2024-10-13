
class Patterns {


    private static swordPattern: any = null;
    private static heartPattern: any = null;

    private static zombiePattern: any = null;
    private static deadZombiePattern: any = null;

    private static skeletonPattern: any = null;
    private static deadSkeletonPattern: any = null;


    private static groundPattern: any = null;

    public static getSwordPattern = (ctx: any) => {
        if (Patterns.swordPattern == null) {
            let image = new Image()
            image.src = 'images/sword.png'
            Patterns.swordPattern = ctx.createPattern(image, "no-repeat");
        }
        return Patterns.swordPattern

    }

    public static getHeartPattern = (ctx: any) => {
        if (Patterns.heartPattern == null) {
            let image = new Image()
            image.src = 'images/heart.png'
            Patterns.heartPattern = ctx.createPattern(image, "repeat");
        }
        return Patterns.heartPattern
    }


    public static getGroundPattern = (ctx: any) => {
        if (Patterns.groundPattern == null) {
            let image = new Image()
            image.src = 'images/grass.png'
            Patterns.groundPattern = ctx.createPattern(image, "repeat");
        }
        return Patterns.groundPattern
    }

    public static getZombiePattern = (ctx: any) => {
        if (Patterns.zombiePattern == null) {
            let image = new Image()
            image.src = 'images/zombie.png'
            Patterns.zombiePattern = ctx.createPattern(image, "no-repeat");
        }
        return Patterns.zombiePattern
    }

    public static getDeadZombiePattern = (ctx: any) => {
        if (Patterns.deadZombiePattern == null) {
            let image = new Image()
            image.src = 'images/zombie-dead.png'
            Patterns.deadZombiePattern = ctx.createPattern(image, "no-repeat")
        }
        return Patterns.deadZombiePattern
    }

    public static getSkeletonPattern = (ctx: any) => {
        if (Patterns.skeletonPattern == null) {
            let image = new Image()
            image.src = 'images/skeleton.png'
            Patterns.skeletonPattern = ctx.createPattern(image, "no-repeat")
        }
        return Patterns.skeletonPattern
    }

    public static getDeadSkeletonPattern = (ctx: any) => {
        if (Patterns.deadSkeletonPattern == null) {
            let image = new Image()
            image.src = 'images/skeleton-dead.png'
            Patterns.deadSkeletonPattern = ctx.createPattern(image, "no-repeat")
        }
        return Patterns.deadSkeletonPattern
    }


}


export default Patterns