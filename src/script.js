import t from 'js-sudoku-generator';
import {useState} from 'react';
import './style.css'

const SudokuGenerator = t.SudokuGenerator;

SudokuGenerator.generate(2);

// get difficulty sheets 
let l_oFirstBoard = SudokuGenerator.generatedBoards[0];
 
// get sheet signature (for loading)
// console.log(l_oFirstBoard.signature)
 
// load saved board 
// let l_oLoadedBoard = SudokuGenerator.loadBoard(l_oFirstBoard.signature);

// get easy difficulty sheet
let l_aEasySheet = l_oFirstBoard.getSheet(0);

function diff_fun(n){
    if(n>0)
    l_aEasySheet = l_oFirstBoard.getSheet(n-1);
    else if(n === 0) l_aEasySheet = l_oFirstBoard.board
    else if(n < 0){
        SudokuGenerator.generate(2);
        l_oFirstBoard = SudokuGenerator.generatedBoards[0]
        l_aEasySheet = l_oFirstBoard.getSheet(-(-n+1));
        x = l_oFirstBoard.board
    }
}
// get hard difficulty sheet
// let l_aHardSheet = l_oFirstBoard.getSheet(2);
 
// get medium difficulty sheet
// let l_aMediumSheet = l_oFirstBoard.getSheet(1);

// pretty print solution to console
l_oFirstBoard.prettyPrint();
//  console.log(l_oFirstBoard.board)
// pretty print sheet
// l_oFirstBoard.prettyPrint(l_aEasySheet);
// console.log(l_aEasySheet)
let x = l_oFirstBoard.board;
// console.log(x)
// let styl={backgroundColor:"red"};

var count1=81;
// function counter(i,j){
//     count = (l_aEasySheet[i][j] ? count-1:count);
//     // console.log(l_aEasySheet[i][j],count)
// }
function Cell(props){
    const [clr,setClr] = useState({backgroundColor:"green"})
    
    function fun(t,i,j){
        if(x[i][j] == t){
            setClr({backgroundColor:"blue"})
        //  count1 = (count1-1);
        }
        else if(t) setClr({backgroundColor:"red"})
        else setClr({backgroundColor:"white"})
        if(count1 === 0){
            alert('Finished...')
            window.reload()
        }
        console.log(count1)
    }
    return ( l_aEasySheet[props.i][props.j] ?
    <input maxLength="1" key={--count1} value={l_aEasySheet[props.i][props.j]} readOnly></input> :
    <input maxLength="1" key={props.i} value={undefined} style={clr} onInput={(e) =>{ fun(e.target.value,props.i,props.j)}}></input>);
}

function Box(props){
    return (<div className="">
        {[...Array(9)].map((e, index) => <Cell key={index} i={props.i} j={index} />)}
    </div>);
}

function Board(props){
    diff_fun(props.level)
    return (<div className="outer">
        {[...Array(9)].map((e, i) => {
        return  <Box i={i}/>})}
    </div>);
}
export default Board;