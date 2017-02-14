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

    return {
        evolve: evolve
    };
};
