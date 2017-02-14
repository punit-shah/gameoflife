module.exports = function () {
    const LIVE = 1;
    const EMPTY = 0;

    function evolve(gridState) {
        const rows = gridState.length;
        const cols = gridState[0].length;

        // newState - new grid with same number of rows and columns as gridState
        var newState = new Array(rows);
        for (let i = 0; i < rows; i++) {
            newState[i] = new Array(cols);
        }

        // find state for each cell in grid
        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < cols; y++) {
                const liveNeighbours = getLiveNeighbours(gridState, x, y);
                const currentCell = gridState[x][y];

                if (currentCell === LIVE) {
                    if (liveNeighbours === 2 || liveNeighbours === 3) {
                        newState[x][y] = LIVE;
                    } else {
                        newState[x][y] = EMPTY;
                    }
                } else { // current cell is empty
                    if (liveNeighbours === 3) {
                        newState[x][y] = LIVE;
                    } else {
                        newState[x][y] = EMPTY;
                    }
                }
            }
        }

        return newState;
    }

    // returns the number of neighbours of the cell grid[x][y]
    function getLiveNeighbours(grid, x, y) {
        let liveNeighbours = 0;

        // loop through cell's neighbours
        for (let i = -1; i <= 1; i++) {
            const nx = x + i;

            for (let j = -1; j <= 1; j++) {
                const ny = y + j;

                // check that neighbour exists in grid
                const neighbourExists = typeof grid[nx] !== 'undefined' && typeof grid[nx][ny] !== 'undefined';

                if (neighbourExists) {
                    // check that the cell and the neighbour are not the same cell
                    const isNotSameCell = !(nx === x && ny === y);

                    // check that the neighbour is live
                    const isLive = grid[nx][ny] === LIVE;

                    if (isNotSameCell && isLive) {
                        liveNeighbours++;
                    }
                }
            }
        }

        return liveNeighbours;
    }

    return {
        evolve: evolve
    };
};
