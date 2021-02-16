import { useState, useCallback } from "react";

import { TETROMINOS, randomTetromino } from "../tetronimos";
import { checkCollision, STAGE_WIDTH } from "../gameHelpers";

export const usePlayer = () => {
	const [player, setPlayer] = useState({
		pos: { x: 0, y: 0 },
		tetromino: TETROMINOS[0].shape,
		collided: false,
	});

	// initialization of the future tetromino to display on the little screen
	const [futureTetro, setFutureTetro] = useState({
		pos: { x: 0, y: 0 },
		tetromino: TETROMINOS[0].shape,
		collided: false,
	});

	const rotate = (tetro, dir) => {
		// set col to rows to rotate the tetromino
		const rotatedTetro = tetro.map((_, index) =>
			tetro.map((col) => col[index])
		);
		// reverse horizontally for clockwise and flip vertically for counter-clockwise rotation
		if (dir > 0) return rotatedTetro.map((row) => row.reverse());
		return rotatedTetro.reverse();
	};

	const playerRotate = (stage, dir) => {
		// create a deep clone of the player
		const clonedPlayer = JSON.parse(JSON.stringify(player));
		clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

		const pos = clonedPlayer.pos.x;
		let offset = 1;
		// looks in the future if there is space on the to left and right to rotate
		while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
			// having an offset allows pushing tetro away from the horizontal obstacles
			clonedPlayer.pos.x += offset;
			offset = -(offset + (offset > 0 ? 1 : -1));
			if (offset > clonedPlayer.tetromino[0].length) {
				rotate(clonedPlayer.tetromino, -dir);
				clonedPlayer.pos.x = pos;
				return;
			}
		}
		setPlayer(clonedPlayer);
	};

	const updatePlayerPos = ({ x, y, collided }) => {
		setPlayer((prev) => ({
			...prev,
			pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
			collided,
		}));
	};

	const resetPlayer = useCallback(() => {
		setPlayer(futureTetro.tetromino.length > 1 ? futureTetro : {
			pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
			tetromino: randomTetromino().shape,
			collided: false,
		});
		setFutureTetro({
			pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
			tetromino: randomTetromino().shape,
			collided: false,
		});
	}, [futureTetro]);

	return [player, updatePlayerPos, resetPlayer, playerRotate, futureTetro];
};
