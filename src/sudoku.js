import {useState} from 'react';
import Sudoku from './script';
import './style.css';
var level = 0;

function Board(){
    const [level,setLevel] = useState(2);
    return <section className="body">
        <button onClick={()=> setLevel(-level)}>New Game</button>
        Level :- <button onClick={()=> setLevel(1)}>Easy</button>
        <button onClick={()=> setLevel(2)}>Medium</button>
        <button onClick={()=> setLevel(3)}>Hard</button>
        <Sudoku level={level} />
        {/* <button onClick={()=> setLevel(11)}>Reset</button> */}
        <button onClick={()=> setLevel(0)}>Answer</button>
    </section>
}
export default Board;