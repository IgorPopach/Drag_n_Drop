import React from "react";

import BoardList from "./components/BoardList";

const firstList = [
  {
      id: "card-1",
      desc: "Item 1",
      draggable: true,
  },
  {
      id: "card-2",
      desc: "Item 2",
      draggable: true,
  },
  {
      id: "card-3",
      desc: "Item 3",
      draggable: true,
  },
];

const secondList = [
  {
      id: "card-4",
      desc: "Item 4",
      draggable: true,
  },
  {
      id: "card-5",
      desc: "Item 5",
      draggable: true,
  },
  {
      id: "card-6",
      desc: "Item 6",
      draggable: true,
  },
];

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <BoardList
          id="board-1" 
          className="board-list" 
          boardList={firstList}
        />
        <BoardList
          id="board-2" 
          className="board-list" 
          boardList={secondList}
        />
      </main>
    </div>
  );
}

export default App;
