import React, { Component } from 'react';
import { createStyledComponent } from 'mineral-ui';
import Button from 'mineral-ui/Button';
import Box from 'mineral-ui/Box';

class Table extends Component {
    state = {
        puzzle: [[]],
        time: null
    };

    checkValue = (puzzle) => {
        if ( typeof puzzle === 'string' ){
            const arr = puzzle.split('').map((char) => parseInt(char.replace('.', 0), 10));
            const chunk = (arr, size) => arr.reduce((acc, _, i) => (i % size) ? acc : [...acc, arr.slice(i, i + size)], []);
            return chunk(arr, 9);
        } else {
            return puzzle;
        }    
    };

    //Attempt backtracking
    findEmptyRows = (puzzle) => {
        puzzle.map((row, index) => {
            return row.map((val, valIndex) => {
                if ( val === 0) {
                    return [row, valIndex];
                } else {
                    return 0;
                }
            }).filter((val => val !== 0))
        }).reduce((a, b) => a.concat(b), []);
    };

    sudokuSolver = (puzzle) => {
    let takenNumbers = {}, impossibleNumbers, count = 81;
        while ( count > 0 ) {
            count = 0;
        for(let v = 0; v < puzzle.length; v++){
            for(let h = 0; h < puzzle.length; h++){
                //if value is a empty or 0
                if (puzzle[v][h] === 0) {
                    //reset
                    takenNumbers = {};
                    //check the box
                    for(let i = 0; i < 9; i++){
                        //first check vertically
                        if (puzzle[v][i] > 0){
                            takenNumbers[puzzle[v][i]] = true;
                        }
                        //followed by horizontally 
                        if (puzzle[i][h] > 0){
                            takenNumbers[puzzle[i][h]] = true;
                        }
                    }

                    // debugger
                    for (let vertBox = Math.floor(v / 3) * 3; vertBox < Math.floor(v / 3) * 3 + 3; vertBox++){
                        for (let horiBox = Math.floor(h / 3) * 3; horiBox < Math.floor(h / 3) * 3 + 3; horiBox++){
                            if ( puzzle[vertBox][horiBox]) {
                                takenNumbers[puzzle[vertBox][horiBox]] = true;
                            }
                        }   
                    }

                    impossibleNumbers = Object.keys(takenNumbers);
                
                    if ( impossibleNumbers.length === 8 ) {
                        for (let ii = 1; ii < 10; ii++){
                            if (impossibleNumbers.indexOf(ii.toString()) < 0) {
                                // console.log(vert,horz);
                                puzzle[v][h] = ii;
                            } else {
                                this.findEmptyRows(puzzle);
                            }
                        }
                    } else {
                        count++;
                    } 
                }
            }
        }
    }
    return puzzle;
    }

    solvePuzzle = () => {
        const { puzzle } = this.props;
        const startTime = performance.now();
        const solvedSudoku = this.sudokuSolver(puzzle);
        const endTime = performance.now();

        this.setState({
            puzzle: solvedSudoku,
            time: Math.floor(endTime - startTime)
        })
    }
    
    TableLayout = createStyledComponent('div', ({ theme }) => ({
        fontFamily: theme.fontFamily,
        backgroundColor: 'blue',
        '& > *': {
          marginRight: '0.5rem'
        }
      }));

    render() {
        const puzzle = this.checkValue(this.props.puzzle);
        const { time } = this.state;
        
        return (
            <div>
                <Box>
                   <p>Time to solve: { time ? <span> { time } milliseconds.</span> : "" } </p>
                </Box>
                <Box>
                <table>    
                    <tbody>
                        { puzzle.map((row, id) => (
                        <tr key={id}>
                            { row.map((name, va) => (
                                <td style={{ padding: 10 + 'px', outline: '1px solid black' }} key={va}>{ name }</td>
                            ))}    
                        </tr>
                        ))}
                    </tbody>
                </table>
                </Box>
                <Box padding="md">
                    <Button variant="success" primary size="medium" onClick={ this.solvePuzzle }>Solve Puzzle</Button>
                </Box>
            </div>
        )
    }
}

export default Table;