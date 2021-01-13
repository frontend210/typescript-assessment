interface State {
  readonly size: number,
  step: number,
  vPos: number,
  hPos: number,
  grid: number[][],
}

const initGrid: (size: number) => number[][] = function (n: number) {
  let grid: number[][] = [];
  for (let i = 0; i < n; i++) {
    grid.push([]);
    for (let j = 0; j < n; j++) {
      grid[i].push(i === 0 && j === 0 ? 1 : 0);
    }
  }
  return grid;
}

const printResult: (grid: number[][]) => void = function (grid: number[][]) {
  grid.map(row => {
    console.log(`[${row.map(cell => cell ? '*' : ' ').join('  ')}]`)
  });
}

const generateSpiralGrid: (size: number) => number[][] = function (n: number) {
  const state: State = {
    size: n,
    step: n-1,
    vPos: 0,
    hPos: 1,
    grid: initGrid(n),
  };

  for (; state.step > 0; state.step--) {

    const dir = (state.size - state.step - 1) % 4;

    switch (dir) {
      case 0: // left
        for (let i = 0; i < state.step; i++, state.hPos++) {
          state.grid[state.vPos][state.hPos] = 1;
        }
        state.hPos--;
        state.vPos++;
        break;

      case 1: // down
        for (let i = 0; i < state.step; i++, state.vPos++) {
          state.grid[state.vPos][state.hPos] = 1;
        }
        state.hPos--;
        state.vPos--;
        break;

      case 2: // right
        for (let i = 0; i < state.step; i++, state.hPos--) {
          state.grid[state.vPos][state.hPos] = 1;
        }
        state.hPos++;
        state.vPos--;
        break;

      case 3: // up
        for (let i = 0; i < state.step; i++, state.vPos--) {
          state.grid[state.vPos][state.hPos] = 1;
        }
        state.hPos++;
        state.vPos++;
        break;
    }
  }

  return state.grid;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Please input grid size?', (size: string) => {
  const grid = generateSpiralGrid(Number(size));
  printResult(grid);
  readline.close();
});
