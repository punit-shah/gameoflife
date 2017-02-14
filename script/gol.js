module.exports = function () {
    const ALIVE = 1;
    const DEAD = 0;

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
                newState[x][y] = DEAD;

                // todo: determine state depending on number of alive neighbours
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

                    // check that the neighbour is alive
                    const isAlive = grid[nx][ny] === ALIVE;

                    if (isNotSameCell && isAlive) {
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
