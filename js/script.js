window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game

  function startGame() {
    console.log("start game");
    let game = new Game();
    game.start();
  }
  startButton.addEventListener("click", function () {
    startGame();
  });

  document.addEventListener('keydown', (event) => { 
    if(event.code==='ArrowLeft'){
    game.player.directionX=-1}
    if(event.code==='ArrowRight'){
    game.player.directionX=1}
    if(event.code==='ArrowUp'){
    game.player.directionY=-1}
    if(event.code==='ArrowDown'){
    game.player.directionX=1}
  }) 
  document.addEventListener('keyup', event => {
    if (
      event.code === 'ArrowUp' ||
      event.code === 'ArrowDown'
    ) {
      game.player.directionY = 0
    }
    if (
      event.code === 'ArrowLeft' ||
      event.code === 'ArrowRight' 
    ) {
      game.player.directionX = 0
    }
  })
}
