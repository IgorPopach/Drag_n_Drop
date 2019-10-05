import React from 'react'

function Item(props) {
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(() => {
            target.style.display = 'none';
        }, 0)
    }
    const dragOver = e => {
        e.stopPropagation();
    }
    const dropOnItem = e => {

    }
    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDrop={dropOnItem}
        >
            <p>{props.description}</p>
        </div>
    )
}

export default Item;
