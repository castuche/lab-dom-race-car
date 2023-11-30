class Game {
    constructor(){
        this.startScreen = document.getElementById("game-intro") ;
        this.gameScreen = document.getElementById("game-screen") ;
        this.gameEndScreen = document.getElementById("game-end") ;
        this.player = null ;
        this.height = 600 ;
        this.width = 500 ;
        this.obstacles=[] ;
        this.score = 0 ;
        this.lives = 3 ;
        this.gameIsOver = false ;
        this.animateId = null;
    }

    start () {
        this.gameScreen.style.height = `${this.height}px` ;
        this.gameScreen.style.width = `${this.witdh}px` ;
        this.gameScreen.style.display = "block";
        this.startScreen.style.display = "none";

        this.player = new Player(this.gameScreen);

        this.gameLoop();
    }

  
    gameLoop(){
        this.player.move();

        if (this.gameIsOver){
            return;}
        else {
            window.requestAnimationFrame(()=>this.gameLoop());
        }}


    

    }