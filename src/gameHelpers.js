export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

console.log(createStage());

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  // looping through the rows of a tetromino-player
  for (let y = 0; y < player.tetromino.length; y += 1) {
    // looping through cells within rows of a tetromino-player
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // we are accounting only for actual tetromino cells
      if (player.tetromino[y][x] !== 0) {
        // checking is y-axis move is within the stage's y-axis area
        if (
          !stage[y + player.pos.y + moveY] ||
          // checking if the x-axis move is within the stage's x-axis boundaries
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // check if the cell we're moving to already has a tetromino in it (is not clear)
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};

// reference
// [
// 	[0, X, 0]
// 	[0, X, 0]
// 	[0, X, 0]
// ]

// array[y][x]
// array[3][2]
// array[3] === undefined
// undefined[2] — NOPE
