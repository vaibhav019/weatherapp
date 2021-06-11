import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
//import './App.css';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Ben',
    thumb: '/images/gary.png'
  },
  {
    id: 'cato',
    name: 'Doremon',
    thumb: '/images/cato.png'
  },
  {
    id: 'kvn',
    name: 'Jaadu',
    thumb: '/images/kvn.png'
  },
  {
    id: 'mooncake',
    name: 'Vaibhav ',
    thumb: '/images/mooncake.png'
  },
  {
    id: 'quinn',
    name: 'Junior G',
    thumb: '/images/quinn.png'
  }
]

function Dnd() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="dnd">
      <header >
        <h1>Drag and Drop</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
      
    </div>
  );
}

export default Dnd;