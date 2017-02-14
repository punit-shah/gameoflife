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

        // middle cells should be empty
        expect(evolve(noNeighbours)[1][1]).toEqual(0);
        expect(evolve(oneNeighbour)[1][1]).toEqual(0);
    });

    it('can evolve a live cell with more than three neighbours', () => {
        var fourNeighbours = [
            [1, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ];

        var fiveNeighbours = [
            [0, 0, 0],
            [1, 1, 1],
            [1, 1, 1]
        ];

        // middle cells should be empty
        expect(evolve(fourNeighbours)[1][1]).toEqual(0);
        expect(evolve(fiveNeighbours)[1][1]).toEqual(0);
    });

    it('can evolve a live cell with two or three neighbours', () => {
        var twoNeighbours = [
            [1, 1, 0],
            [0, 1, 0],
            [0, 0, 0]
        ];

        var threeNeighbours = [
            [0, 0, 0],
            [0, 1, 0],
            [1, 1, 1]
        ];

        // middle cells should be live
        expect(evolve(twoNeighbours)[1][1]).toEqual(1);
        expect(evolve(threeNeighbours)[1][1]).toEqual(1);
    });
});
