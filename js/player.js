class Player {
    constructor (gameScreen){
        this.gameScreen = gameScreen ;
        this.left = 250 ;
        this.top = 440 ;
        this.width = 100 ;
        this.height = 200 ;
        this.directionX = 0 ;
        this.directionY = 0 ;
        this.element = document.createElement('img') ;

        this.element.src = "./images/car.png";
        this.element.style.position='absolute';
        this.element.style.width=`${this.width}px`
        this.element.style.height=`${this.height}px`
        this.element.style.left=`${this.left}px`
        this.element.style.top=`${this.top}px`

        this.gameScreen.appendChild(this.element);
    }

    move(){
        if (this.left >= 0) {
            this.left += this.directionX
          } else {
            this.left = 60
          }
          if (this.left <= 500 - this.width) {
            this.left += this.directionX
          } else {
            this.left = 440 - this.width
          }
      
          if (this.top >= 0) {
            this.top += this.directionY
          } else {
            this.top = 0
          }
          if (this.top <= this.gameScreen.offsetHeight - this.height) {
            this.top += this.directionY
          } else {
            this.top = this.gameScreen.offsetHeight - this.height
          }
        this.updatePosition()
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle){
        const rect1 = this.element.getBoundingClientRect();
        const rect2 = obstacle.getBoundingClientRect();

        return (
            rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top
          )
    }
}