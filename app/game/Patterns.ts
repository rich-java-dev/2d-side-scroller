
class Patterns {


    private static swordPattern: any = null;
    private static heartPattern: any = null;

    private static keyPattern: any = null;

    private static groundPattern: any = null;
    private static brickPattern: any = null;


    private static zombiePattern: any = null;
    private static deadZombiePattern: any = null;

    private static skeletonPattern: any = null;
    private static deadSkeletonPattern: any = null;

    private static batPattern: any = null;
    private static deadBatPattern: any = null;

    private static slimePattern: any = null;
    private static deadSlimePattern: any = null;


    //
    // PLAYER
    //

    public static getSwordPattern = (ctx: any) => {
        if (Patterns.swordPattern == null) {
            let image = new Image()
            image.src = 'images/sword1.png'
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


    //
    // ITEMS
    //

    public static getKeyPattern = (ctx: any) => {
        if (Patterns.keyPattern == null) {
            let image = new Image()
            image.src = 'images/key.png'
            Patterns.keyPattern = ctx.createPattern(image, "repeat");
        }
        return Patterns.keyPattern
    }

    //
    // FLOORS/WALLS/LEVEL
    //

    public static getGroundPattern = (ctx: any) => {
        if (Patterns.groundPattern == null) {
            let image = new Image()
            image.src = 'images/grass.png'
            Patterns.groundPattern = ctx.createPattern(image, "repeat");
        }
        return Patterns.groundPattern
    }

    public static getBrickPattern = (ctx: any) => {
        if (Patterns.brickPattern == null) {
            let image = new Image(80, 80)
            image.src = 'images/brick.png'
            Patterns.brickPattern = ctx.createPattern(image, "repeat");
        }
        return Patterns.brickPattern
    }


    //
    // ENEMIES
    //

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


    public static getBatPattern = (ctx: any) => {
        if (Patterns.batPattern == null) {
            let image = new Image()
            image.src = 'images/bat.png'
            Patterns.batPattern = ctx.createPattern(image, "no-repeat")
        }
        return Patterns.batPattern
    }

    public static getDeadBatPattern = (ctx: any) => {
        if (Patterns.deadBatPattern == null) {
            let image = new Image()
            image.src = 'images/bat-dead.png'
            Patterns.deadBatPattern = ctx.createPattern(image, "no-repeat")
        }
        return Patterns.deadBatPattern
    }

    public static getSlimePattern = (ctx: any) =>{
        if(Patterns.slimePattern==null) {
            let image = new Image()
            image.src = 'images/slime.png'
            Patterns.slimePattern = ctx.createPattern(image, "no-repeat")

        }
        return Patterns.slimePattern
    }

    public static getDeadSlimePattern = (ctx: any) =>{
        if(Patterns.deadSlimePattern==null) {
            let image = new Image()
            image.src = 'images/slime-dead.png'
            Patterns.deadSlimePattern = ctx.createPattern(image, "no-repeat")

        }
        return Patterns.deadSlimePattern
    }



}


export default Patterns