

class Sounds {


    public static jumpSound = () => {
        let audio = new Audio('sounds/jump.wav');
        audio.play();
    }

    public static swingSound = () => {
        let audio = new Audio('sounds/swing.wav');
        audio.play(); 
    }

    public static hitSound = () => {
        let audio = new Audio('sounds/hit.wav');
        audio.play();
    }

    public static winSound = () => {
        let audio = new Audio('sounds/win.wav');
        audio.play();
    }

    public static song1 = () =>{
        let audio = new Audio('sounds/song1.mp3')
        audio.play()
    }


}

export default Sounds