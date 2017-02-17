# gameoflife

## Task ##

My task was to implement the rules of Conway's Game of Life as explained in the document statement. I implemented the `evolve()` method in `scripts/gol.js` and added tests to `spec/golSpec.js` to verify the correctness of my code.

## Running Tests ##

### Prerequisites ###

[node.js](https://nodejs.org/) - once installed, run `npm install` in this directory.

### In node ###

```
npm test
```

#### Debugging ####

To run tests with a debugger, run the following then go to http://localhost:8282/debug?port=5858 in Chrome:

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
