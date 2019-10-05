import React, { useState } from 'react';
import Item from './Item';

const BoardList = props => {

    const [itemsList, setItemsList] = useState(props.boardList);

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        card.style.display = 'block';
        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <div 
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            {itemsList.map(e => {
                return <Item 
                    id={e.id}
                    draggable={e.draggable}
                    description={e.desc}
                    className="list-item"
                />
            })}
        </div>
    )
}

export default BoardList;