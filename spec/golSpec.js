describe('Game', function () {
    var evolve = require('../script/gol')().evolve;

    it('can evolve an inital empty grid', () => {
        var initialState = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        var resultState = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        expect(evolve(initialState)).toEqual(resultState);
    });

    it('can evolve a live cell with fewer than two neighbours', () => {
        var noNeighbours = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ];

        var oneNeighbour = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ];

        var resultState = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        expect(evolve(noNeighbours)).toEqual(resultState);
        expect(evolve(oneNeighbour)).toEqual(resultState);
    });
});
