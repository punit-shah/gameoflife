module.exports = function () {

    function evolve(gridState) {
        var newState = cloneArray(gridState);
        return newState;
    }

    function cloneArray(array) {
        return array.slice(0);
    }

    return {
        evolve: evolve
    };
};
