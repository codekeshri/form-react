import React from 'react';
import './Board.css';
import Cardlist from '../ui/Cardlist';

const Board = (props) =>{
  const [list, setList] = useState([]);

    return (
        <Cardlist/>
    )
} 

export default Board;