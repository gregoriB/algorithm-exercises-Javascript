function sudoku2(grid) {
  for (let i = 0; i < grid.length; i++) {
      const objColumn = {}
      let objRow = {}
      for (let j = 0; j < grid.length; j++) {
          const columnNum = grid[j][i];
          const rowNum = grid[i][j];
          objRow[rowNum] = rowNum === '.' ? 0 : (objRow[rowNum] || 0) + 1;
          objColumn[columnNum] = columnNum === '.' ? 0 : (objColumn[columnNum] || 0) + 1;
          if (objRow[rowNum] > 1 || objColumn[columnNum] > 1) return false;

      }
  }
          
  let obj1 = {}
  let obj2 = {}
  let obj3 = {}
  
  for (let i = 0; i < grid.length; i++) {

      
      for (let j = 0; j < 3; j++) {
          let number = grid[i][j];
          obj1[number] = number === '.' ? 0 : (obj1[number] || 0) + 1;
          if (obj1[number] > 1) return false;
          
      }
      
      for (let k = 3; k < 6; k++) {
          let number = grid[i][k];
          obj2[number] = number === '.' ? 0 : (obj2[number] || 0) + 1;
          if (obj2[number] > 1) return false;

      }
      
      for (let l = 6; l < 9; l++) {
          let number = grid[i][l];
          obj3[number] = number === '.' ? 0 : (obj3[number] || 0) + 1;
          if (obj3[number] > 1) return false;

      }

      if ( i === 2 || i === 5 ) {
          obj1 = {}
          obj2 = {}
          obj3 = {}
      }
      
  }
  
  return true;
}
