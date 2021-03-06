# gameoflife

## Task ##

My task was to implement the rules of Conway's Game of Life as explained in [rules.md](https://github.com/punit-shah/gameoflife/blob/master/rules.md). I
was given the choice of doing this in Java, JavaScript or Python, and chose JavaScript. I implemented the `evolve()` method in `scripts/gol.js` and added
tests to `spec/golSpec.js` to verify the correctness of my code.

The game grids are represented by two-dimensional arrays. Live cells are represented by `1`s, and empty cells are represented by `0`s. An example grid could look like this:

```js
[
  [0, 1, 0],
  [0, 1, 1],
  [0, 0, 0]
]
```

The inner arrays in a grid passed to `evolve()` must be the same length.

## Running Tests ##

The tests make sure that all the scenarios described in [rules.md](https://github.com/punit-shah/gameoflife/blob/master/rules.md) are satisfied.

### Prerequisites ###

[node.js](https://nodejs.org/) - once installed, run `npm install` in this directory.

### In node ###

```
npm test
```

#### Debugging ####

To run tests with a debugger, run the following then go to [http://localhost:8282/debug?port=5858](http://localhost:8282/debug?port=5858) in Chrome:

```
npm install -g jasmine-node-debug
jasmine-node-debug
```

Execution will initially be paused to allow you to add breakpoints.

### In the browser ###

```
npm install -g webpack
npm run webpack-test
open _specRunner.html
```

<img src="https://cloud.githubusercontent.com/assets/6018387/23070475/10afb3d6-f523-11e6-8933-4490dd4cae4c.png" alt="Jasmine tests passing" width="384"/>

Every time a change is made, run `npm run webpack-test` again and then refresh _specRunner.html in your browser window.

#### Debugging #####

As you would in the browser normally, except all your output will be concatenated into a single file `bundle.js`.
